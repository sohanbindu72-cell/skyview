"use server";

import connectDB from '@/lib/db';
import Reservation from '@/lib/models/Reservation';
import Location from '@/lib/models/Location';

export async function submitBooking(data, existingId = null) {
  try {
    await connectDB();
    
    // Attempt to find a matching location document for the selected airport
    const airportParts = (data.airport || '').split(',').map(p => p.trim());
    const searchTarget = airportParts.length > 1 ? airportParts[1] : airportParts[0];
    
    const locationDoc = await Location.findOne({
      $or: [
        { "airports.name": { $regex: new RegExp(searchTarget, 'i') } },
        { countryName: { $regex: new RegExp(airportParts[0], 'i') } }
      ]
    });

    if (!locationDoc) {
      console.warn(`Could not find a specific Location mapping for: ${data.airport}`);
    }

    // Map frontend data to Reservation schema
    const reservationData = {
      customerName: `${data.firstName || ''} ${data.lastName || ''}`.trim() || 'Guest User',
      customerEmail: data.email,
      customerPhone: data.phone || 'N/A',
      fromLocation: locationDoc?._id,
      fromAirport: data.airport,
      departureDate: new Date(data.date),
      passengers: parseInt(data.passengerCount) || 1,
      serviceLevel: data.serviceType.toLowerCase().includes('terminal') ? 'VIP' : 'Premium',
      status: 'Pending',
      totalAmount: data.totalPrice || 0,
      paymentStatus: 'Unpaid',
      notes: `Airline: ${data.airline || 'N/A'}, Flight: ${data.flightNumber || 'N/A'}. ${data.specialRequirements || ''}`
    };

    let booking;
    if (existingId) {
      booking = await Reservation.findByIdAndUpdate(existingId, reservationData, { new: true });
    } else {
      booking = await Reservation.create(reservationData);
    }

    // --- Auto-Registration Logic ---
    try {
      const User = (await import('@/lib/models/User')).default;
      const bcrypt = (await import('bcryptjs')).default;
      const crypto = await import('crypto');

      const existingUser = await User.findOne({ email: data.email });
      if (!existingUser) {
        // Create a new user with a temporary password
        const tempPassword = crypto.randomBytes(4).toString('hex'); // 8 character hex
        const hashedPassword = await bcrypt.hash(tempPassword, 10);
        
        await User.create({
          name: reservationData.customerName,
          email: data.email,
          password: hashedPassword,
          phone: reservationData.customerPhone,
          isPasswordTemp: true,
          bookings: [booking._id]
        });

        // Trigger welcome email with temporary password
        try {
          const { sendPasswordEmail } = await import('@/lib/mail');
          await sendPasswordEmail(data.email, reservationData.customerName, tempPassword);
        } catch (mailError) {
          console.error("[MAIL] Failed to trigger welcome email:", mailError);
        }

        console.log(`[AUTH] Created user for ${data.email} with temp password: ${tempPassword}`);
      } else {
        // Link the new booking to the existing user
        if (!existingUser.bookings.includes(booking._id)) {
          existingUser.bookings.push(booking._id);
        }

        // IMPROVEMENT: If the user still has a temporary password, 
        // regenerate and resend it to ensure they can find their login info.
        if (existingUser.isPasswordTemp) {
          const tempPassword = crypto.randomBytes(4).toString('hex');
          const hashedPassword = await bcrypt.hash(tempPassword, 10);
          existingUser.password = hashedPassword;
          
          try {
            const { sendPasswordEmail } = await import('@/lib/mail');
            await sendPasswordEmail(data.email, existingUser.name, tempPassword);
            console.log(`[AUTH] Regenerated temp password for existing user ${data.email}: ${tempPassword}`);
          } catch (mailError) {
            console.error("[MAIL] Failed to resend temp password:", mailError);
          }
        }
        
        await existingUser.save();
      }
    } catch (authError) {
      console.error("Auto-registration error (non-blocking):", authError);
      // We don't want to fail the whole booking if auth setup fails
    }
    // --------------------------------
    
    // --- Lead Conversion Logic ---
    try {
      const Lead = (await import('@/lib/models/Lead')).default;
      await Lead.updateMany(
        { email: data.email, status: 'Inquiry' },
        { $set: { status: 'Booked' } }
      );
    } catch (leadError) {
      console.error("Lead conversion error (non-blocking):", leadError);
    }
    // --------------------------------

    return {
      success: true,
      message: existingId ? "Booking updated successfully" : "Booking received successfully",
      bookingId: booking._id.toString()
    };
  } catch (error) {
    console.error("Booking Error:", error);
    return {
      success: false,
      message: "Failed to save booking to database."
    };
  }
}

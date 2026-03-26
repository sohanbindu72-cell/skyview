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

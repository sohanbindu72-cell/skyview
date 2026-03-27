import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Reservation from '@/lib/models/Reservation';
import '@/lib/models/Location'; // Ensure Location model is registered for populate

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (email) {
      // Fetch booking history for a specific customer
      const history = await Reservation.find({ customerEmail: email })
        .populate('fromLocation')
        .populate('toLocation')
        .sort({ departureDate: -1 });
      return NextResponse.json(history);
    }

    // Fetch unique customers list
    const customers = await Reservation.aggregate([
      {
        $group: {
          _id: "$customerEmail",
          name: { $first: "$customerName" },
          phone: { $first: "$customerPhone" },
          totalBookings: { $sum: 1 },
          totalSpent: { $sum: "$totalAmount" },
          lastBookingDate: { $max: "$departureDate" }
        }
      },
      {
        $project: {
          _id: 0,
          email: "$_id",
          name: 1,
          phone: 1,
          totalBookings: 1,
          totalSpent: 1,
          lastBookingDate: 1
        }
      },
      { $sort: { lastBookingDate: -1 } }
    ]);

    return NextResponse.json(customers);
  } catch (error) {
    console.error('Error in customers API:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}

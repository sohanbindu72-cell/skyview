import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Reservation from '@/lib/models/Reservation';
import '@/lib/models/Location';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('userToken')?.value;

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback_secret_key');
    const { payload } = await jwtVerify(token, secret);
    
    await connectDB();
    const userBookings = await Reservation.find({ customerEmail: payload.email })
      .populate('fromLocation')
      .populate('toLocation')
      .sort({ departureDate: -1 });

    return NextResponse.json(userBookings);
  } catch (error) {
    console.error('Error fetching user bookings:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}

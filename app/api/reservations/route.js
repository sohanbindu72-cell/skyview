import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Reservation from '@/lib/models/Reservation';
import '@/lib/models/Location'; // Ensure Location model is registered for populate

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectDB();
    const reservations = await Reservation.find({})
      .populate('fromLocation')
      .populate('toLocation')
      .sort({ createdAt: -1 });
    return NextResponse.json(reservations);
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    await connectDB();
    const newReservation = await Reservation.create(data);
    return NextResponse.json(newReservation, { status: 201 });
  } catch (error) {
    console.error('Error creating reservation:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}

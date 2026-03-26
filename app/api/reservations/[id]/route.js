import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Reservation from '@/lib/models/Reservation';
import Location from '@/lib/models/Location';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();
    const reservation = await Reservation.findById(id)
      .populate('fromLocation')
      .populate('toLocation');
    if (!reservation) {
      return NextResponse.json({ message: 'Reservation not found' }, { status: 404 });
    }
    return NextResponse.json(reservation);
  } catch (error) {
    console.error('Error fetching reservation:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    const data = await request.json();
    await connectDB();
    const updatedReservation = await Reservation.findByIdAndUpdate(id, data, { new: true });
    if (!updatedReservation) {
      return NextResponse.json({ message: 'Reservation not found' }, { status: 404 });
    }
    return NextResponse.json(updatedReservation);
  } catch (error) {
    console.error('Error updating reservation:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();
    const deletedReservation = await Reservation.findByIdAndDelete(id);
    if (!deletedReservation) {
      return NextResponse.json({ message: 'Reservation not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    console.error('Error deleting reservation:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}

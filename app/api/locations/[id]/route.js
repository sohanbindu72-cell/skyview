import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Location from '@/lib/models/Location';

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const data = await request.json();
    
    await connectDB();
    const updatedLocation = await Location.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    
    if (!updatedLocation) {
      return NextResponse.json({ message: 'Location not found' }, { status: 404 });
    }
    
    return NextResponse.json(updatedLocation);
  } catch (error) {
    console.error('Error updating location:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    
    await connectDB();
    const deletedLocation = await Location.findByIdAndDelete(id);
    
    if (!deletedLocation) {
      return NextResponse.json({ message: 'Location not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Location deleted successfully' });
  } catch (error) {
    console.error('Error deleting location:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}

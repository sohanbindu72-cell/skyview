import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import ServicePackage from '@/lib/models/ServicePackage';

export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    const data = await request.json();
    await connectDB();
    const updatedPackage = await ServicePackage.findByIdAndUpdate(id, data, { new: true });
    if (!updatedPackage) {
      return NextResponse.json({ message: 'Package not found' }, { status: 404 });
    }
    return NextResponse.json(updatedPackage);
  } catch (error) {
    console.error('Error updating package:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();
    const deletedPackage = await ServicePackage.findByIdAndDelete(id);
    if (!deletedPackage) {
      return NextResponse.json({ message: 'Package not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Package deleted successfully' });
  } catch (error) {
    console.error('Error deleting package:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}

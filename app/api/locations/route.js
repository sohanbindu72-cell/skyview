import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
import connectDB from '@/lib/db';
import Location from '@/lib/models/Location';

export async function GET() {
  try {
    await connectDB();
    const locations = await Location.find({}).sort({ countryName: 1 });
    return NextResponse.json(locations);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}

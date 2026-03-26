import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import ServicePackage from '@/lib/models/ServicePackage';

export async function GET() {
  try {
    await connectDB();
    let packages = await ServicePackage.find({}).sort({ order: 1 });
    
    // Seed initial data if empty
    if (packages.length === 0) {
      const initialPackages = [
        { name: "Meet & Greet", basePrice: 474, order: 0, features: ["Personal assistant", "Fast-track immigration", "Porter service"], isPopular: false },
        { name: "VIP Terminal", basePrice: 850, order: 1, features: ["Private suite", "Chauffeur to aircraft", "Gourmet dining"], isPopular: true },
        { name: "Private Suite", basePrice: 1200, order: 2, features: ["Ultimate privacy", "En-suite bathroom", "Dedicated concierge"], isPopular: false }
      ];
      await ServicePackage.insertMany(initialPackages);
      packages = await ServicePackage.find({}).sort({ order: 1 });
    }
    
    return NextResponse.json(packages);
  } catch (error) {
    console.error('Error fetching packages:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    await connectDB();
    const newPackage = await ServicePackage.create(data);
    return NextResponse.json(newPackage, { status: 201 });
  } catch (error) {
    console.error('Error creating package:', error);
    return NextResponse.json({ message: error.message || 'Server Error' }, { status: 500 });
  }
}

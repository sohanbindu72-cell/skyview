import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Lead from '@/lib/models/Lead';
import { sendLeadEmail } from '@/lib/mail';

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();

    if (!data.email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    // Capture or update lead
    let lead = await Lead.findOne({ email: data.email, status: 'Inquiry' });
    
    if (lead) {
      lead.airport = data.airport;
      lead.serviceType = data.serviceType;
      lead.date = data.date ? new Date(data.date) : lead.date;
      lead.passengers = data.passengers || lead.passengers;
      await lead.save();
    } else {
      lead = await Lead.create({
        email: data.email,
        airport: data.airport,
        serviceType: data.serviceType,
        date: data.date ? new Date(data.date) : undefined,
        passengers: data.passengers
      });
    }

    // Send the automated package email
    try {
      await sendLeadEmail(data.email, data.airport, data.passengers);
    } catch (mailError) {
      console.error('[LEAD_API] Failed to send lead email:', mailError);
    }

    return NextResponse.json({ success: true, leadId: lead._id });
  } catch (error) {
    console.error('Lead API Error:', error);
    return NextResponse.json({ message: 'Failed to capture lead' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const leads = await Lead.find().sort({ createdAt: -1 });
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch leads' }, { status: 500 });
  }
}

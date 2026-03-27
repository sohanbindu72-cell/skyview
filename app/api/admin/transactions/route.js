import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Transaction from '@/lib/models/Transaction';
import Reservation from '@/lib/models/Reservation';

export async function GET() {
  try {
    await connectDB();
    const transactions = await Transaction.find()
      .populate('reservationId', 'customerName customerEmail')
      .sort({ createdAt: -1 });
      
    return NextResponse.json(transactions);
  } catch (error) {
    console.error('Fetch Transactions Error:', error);
    return NextResponse.json({ message: 'Failed to fetch transactions' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    
    // Create new transaction
    const transaction = await Transaction.create(data);
    
    // Update related reservation payment status
    if (data.status === 'Succeeded' && data.type === 'Payment') {
      await Reservation.findByIdAndUpdate(data.reservationId, { paymentStatus: 'Paid' });
    } else if (data.status === 'Refunded' || data.type === 'Refund') {
      await Reservation.findByIdAndUpdate(data.reservationId, { paymentStatus: 'Refunded' });
    }
    
    return NextResponse.json(transaction);
  } catch (error) {
    console.error('Create Transaction Error:', error);
    return NextResponse.json({ message: 'Failed to record transaction' }, { status: 500 });
  }
}

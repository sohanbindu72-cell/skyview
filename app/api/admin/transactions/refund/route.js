import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Transaction from '@/lib/models/Transaction';
import Reservation from '@/lib/models/Reservation';

export async function POST(request) {
  try {
    await connectDB();
    const { transactionId, reservationId, amount, reason } = await request.json();
    
    // 1. Find the original payment transaction
    const originalTransaction = await Transaction.findById(transactionId);
    if (!originalTransaction) {
      return NextResponse.json({ message: 'Original transaction not found' }, { status: 404 });
    }

    // 2. Create a new Refund transaction
    const refundTransaction = await Transaction.create({
      reservationId: reservationId || originalTransaction.reservationId,
      amount: amount || originalTransaction.amount,
      status: 'Refunded',
      type: 'Refund',
      paymentMethod: originalTransaction.paymentMethod,
      metadata: { reason, originalTransactionId: originalTransaction._id }
    });

    // 3. Update the Reservation status
    await Reservation.findByIdAndUpdate(reservationId || originalTransaction.reservationId, {
      paymentStatus: 'Refunded',
      status: 'Cancelled' // Historically, refunds usually imply cancellation
    });

    return NextResponse.json({ success: true, refund: refundTransaction });
  } catch (error) {
    console.error('Refund Error:', error);
    return NextResponse.json({ message: 'Failed to process refund' }, { status: 500 });
  }
}

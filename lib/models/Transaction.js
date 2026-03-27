import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  reservationId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Reservation',
    required: true 
  },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'USD' },
  status: { 
    type: String, 
    enum: ['Succeeded', 'Failed', 'Refunded'], 
    required: true 
  },
  type: { 
    type: String, 
    enum: ['Payment', 'Refund'], 
    required: true 
  },
  paymentMethod: { type: String, default: 'Card' },
  transactionId: { type: String, unique: true }, // External reference ID
  metadata: { type: Object }
}, { timestamps: true });

// Prevent model overwrite in development
if (mongoose.models.Transaction) {
  delete mongoose.models.Transaction;
}

export default mongoose.model('Transaction', transactionSchema);

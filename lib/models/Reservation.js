import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String, required: true },
  fromLocation: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
  fromAirport: { type: String, required: true },
  toLocation: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  toAirport: { type: String },
  departureDate: { type: Date, required: true },
  returnDate: { type: Date },
  passengers: { type: Number, default: 1 },
  serviceLevel: { 
    type: String, 
    enum: ['Standard', 'Premium', 'VIP'], 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['Pending', 'Confirmed', 'Cancelled', 'Completed'], 
    default: 'Pending' 
  },
  totalAmount: { type: Number, required: true },
  paymentStatus: { 
    type: String, 
    enum: ['Unpaid', 'Paid', 'Refunded'], 
    default: 'Unpaid' 
  },
  notes: { type: String }
}, { timestamps: true });

export default mongoose.models.Reservation || mongoose.model('Reservation', reservationSchema);

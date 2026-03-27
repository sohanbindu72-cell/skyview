import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  airport: String,
  serviceType: String,
  date: Date,
  passengers: Number,
  status: {
    type: String,
    enum: ['Inquiry', 'Booked', 'Contacted'],
    default: 'Inquiry'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);

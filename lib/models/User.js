import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  isPasswordTemp: { type: Boolean, default: true },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }]
}, { timestamps: true });

if (mongoose.models.User) {
  delete mongoose.models.User;
}

export default mongoose.model('User', userSchema);

import mongoose from 'mongoose';

const airportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String }
});

const locationSchema = new mongoose.Schema({
  countryName: { type: String, required: true },
  flagIcon: { type: String, required: true },
  airports: [airportSchema]
}, { timestamps: true });

export default mongoose.models.Location || mongoose.model('Location', locationSchema);

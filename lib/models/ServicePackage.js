import mongoose from 'mongoose';

const servicePackageSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    unique: true 
  },
  basePrice: { 
    type: Number, 
    required: true 
  },
  description: { 
    type: String 
  },
  features: [{ 
    type: String 
  }],
  isActive: { 
    type: Boolean, 
    default: true 
  },
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

if (mongoose.models.ServicePackage) {
  delete mongoose.models.ServicePackage;
}

export default mongoose.model('ServicePackage', servicePackageSchema);

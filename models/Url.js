import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
  originalUrl: { 
    type: String, 
    required: true 
  },
  shortId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    index: { expires: 0 } 
  }
}, { timestamps: true });

export default mongoose.models.Url || mongoose.model('Url', UrlSchema);
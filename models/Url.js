import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 604800, // 7 days = 604800 seconds
  },
});

export default mongoose.models.Url || mongoose.model('Url', UrlSchema);
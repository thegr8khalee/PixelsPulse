import mongoose from 'mongoose';

const newsTeller = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

const NewsTeller = mongoose.model('NewsTeller', newsTeller);
export default NewsTeller;

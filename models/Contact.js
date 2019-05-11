import mongoose from 'mongoose';

const { Schema } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    min: 1,
    max: 30,
  },
  phoneNumber: {
    type: String,
    required: 'Please supply a phone number',
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'Please login',
  },
});

export default mongoose.model('Contact', contactSchema);

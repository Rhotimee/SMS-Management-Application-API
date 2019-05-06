import mongoose from 'mongoose';

const { Schema } = mongoose;

const smsSchema = new Schema({
  message: {
    type: String,
    min: 1,
    max: 300,
  },
  phoneNumber: {
    type: Number,
    required: 'Please supply a phone number',
    unique: 'Phone Number already exists',
  },
  // status:
});

export default mongoose.model('Sms', smsSchema);

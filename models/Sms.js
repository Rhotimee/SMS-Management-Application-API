import mongoose from 'mongoose';

const { Schema } = mongoose;

const smsSchema = new Schema({
  message: {
    type: String,
    min: 1,
    max: 300,
  },
  sentBy: {
    type: String,
    required: 'Please supply a phone number',
  },
  sentTo: {
    type: String,
    required: 'Please supply a phone number',
  },
});

export default mongoose.model('Sms', smsSchema);

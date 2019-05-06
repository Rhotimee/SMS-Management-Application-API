import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    min: 1,
    max: 30,
  },
  phoneNumber: {
    type: Number,
    required: 'Please supply a phone number',
    unique: 'Phone Number already exists',
  },
  password: {
    type: String,
    required: 'Please provide your password',
  },
  contacts: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Contact',
    },
  ],
  sentSMS: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Sms',
  }],
  recievedSMS: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Sms',
  }],
});

export default mongoose.model('User', userSchema);

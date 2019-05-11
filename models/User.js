import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    min: 1,
    max: 30,
  },
  phoneNumber: {
    type: String,
    required: 'Please supply a phone number',
    unique: 'Phone Number already exists',
  },
  password: {
    type: String,
    required: 'Please provide your password',
  },
});

export default mongoose.model('User', userSchema);

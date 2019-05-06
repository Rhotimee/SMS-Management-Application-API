import mongoose from 'mongoose';

const { Schema } = mongoose;

const contactSchema = new Schema({
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
});

export default mongoose.model('Contact', contactSchema);

import mongoose from 'mongoose';
import Joi from '@hapi/joi';

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
  email: String,
  // email: Joi.string().email({ minDomainSegments: 2 }),
});

export default mongoose.model('Contact', contactSchema);

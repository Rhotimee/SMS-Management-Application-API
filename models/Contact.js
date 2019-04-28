import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { Schema } = mongoose;

const contactSchema = new Schema({
  name: String,
  phoneNumber: {
    type: Number,
    required: 'Please supply a phone number',
  },
  email: Joi.string().email({ minDomainSegments: 2 }),
});

export default mongoose.model('Contact', contactSchema);

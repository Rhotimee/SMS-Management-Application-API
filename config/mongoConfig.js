import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Set up default mongoose connection
dotenv.config();
const mongoDB = process.env.MONGO_URL;
mongoose.connect(mongoDB);

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

// Get the default connection
const db = mongoose.connection;
console.log('mongo connected');

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error ⚠️:'));

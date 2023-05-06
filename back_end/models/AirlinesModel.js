import mongoose from 'mongoose';

const airportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  flights: { type: [String], required: true },
  image: { type: String },
});

const Airport = mongoose.model('Airport', airportSchema);

export default Airport;

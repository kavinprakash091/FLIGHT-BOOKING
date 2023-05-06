import mongoose from 'mongoose';

const airlinesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  flights: { type: [String], required: true },
  image: { type: String },
});

const Airlines = mongoose.model('Airlines', airlinesSchema);

export default Airport;

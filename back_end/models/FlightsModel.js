import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  airlineId: { type: String, required: true },
  number: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  schedules: [
    {
      departureAirport: { type: String },
      departureTime: { type: Date },
      arraivalAirport: { type: String },
      arrivalTime: { type: String },
      seats: [
        {
          class: { type: String },
          countSeats: { type: Number },
          fare: { type: Number },
        },
      ],
      status: { type: String },
      date: { type: String },
    },
  ],
  image: { type: String },
});

const Flight = mongoose.model('Flight', flightSchema);

export default Flight;

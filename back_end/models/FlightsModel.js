import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  airlineId: { type: String, required: true },
  number: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  schedules: [
    {
      departureAirport: { type: String, required: true },
      departureTime: { type: Date, required: true },
      arraivalAirport: { type: String, required: true },
      arrivalTime: { type: String, required: true },
      seats: [
        {
          class: { type: String, required: true },
          countSeats: { type: Number, required: true },
          fare: { type: Number, required: true },
        },
      ],
      status: { type: String, required: true },
    },
  ],
  image: { type: String },
});

const Flight = mongoose.model('Flight', flightSchema);

export default Airport;

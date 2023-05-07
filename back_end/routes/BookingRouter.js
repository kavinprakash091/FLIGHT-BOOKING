import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../Utils.js';
import Flight from '../models/FlightsModel.js';
import Airlines from '../models/AirlinesModel.js';
import Booking from '../models/BookingModel.js';

const bookingRouter = express.Router();

bookingRouter.get(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const bookings = await Booking.find({});
    if (!bookings) {
      res.status(404).send({ message: 'No flights found!' });
    }
    res.send(bookings);
    return;
  })
);

bookingRouter.put(
  '/add/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    var seatNumber;
    if (req.body.classType === 'Economy') {
      seatNumber = 'E' + req.body.seatno;
    } else {
      seatNumber = 'B' + req.body.seatno;
    }
    const booking = new Booking({
      userId: req.params.id,
      flightId: req.body.flightId,
      scheduleId: req.body.scheduleId,
      firstname: req.body.firstName,
      lastname: req.body.lastName,
      name: req.body.flightName,
      phone: req.body.phone,
      age: req.body.age,
      gender: req.body.gender,
      nationality: req.body.nationality,
      class: req.body.classType,
      seatNumber: seatNumber,
      date: req.body.date,
    });
    await booking.save();

    const bookings = await Booking.find({});
    res.send(bookings);
    return;
  })
);

export default bookingRouter;

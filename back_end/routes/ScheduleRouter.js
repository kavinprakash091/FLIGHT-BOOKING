import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../Utils.js';
import Flight from '../models/FlightsModel.js';
import Airlines from '../models/AirlinesModel.js';
import Schedule from '../models/ScheduleModel.js';

const scheduleRouter = express.Router();

scheduleRouter.get(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const schedules = await Schedule.find({});
    if (!schedules) {
      res.status(404).send({ message: 'No schedules found!' });
    }
    res.send(schedules);
    return;
  })
);

scheduleRouter.get(
  '/fetch',
  expressAsyncHandler(async (req, res) => {
    const schedules = await Schedule.find({});
    if (!schedules) {
      res.status(404).send({ message: 'No schedules found!' });
    }
    res.send(schedules);
    return;
  })
);

scheduleRouter.put(
  '/add/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const schedule = new Schedule({
      flightId: req.params.id,
      departureAirport: req.body.departureAirport,
      departureTime: req.body.departureTime,
      arrivalAirport: req.body.arrivalAirport,
      arrivalTime: req.body.arrivalTime,
      seats: req.body.seats,
      status: req.body.flightStatus,
      date: new Date(req.body.departureDate),
    });
    await schedule.save();

    const schedules = await Schedule.find({});
    res.send(schedules);
    return;
  })
);

scheduleRouter.put(
  '/seat/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    await Schedule.findByIdAndUpdate(
      { _id: req.params.id },
      {
        seats: req.body.seats,
      }
    );
    const schedules = await Schedule.find({});
    if (!schedules) {
      res.status(404).send({ message: 'No schedules found!' });
    }
    res.send(schedules);
    return;
  })
);

// flightRouter.put(
//   '/update/:id',
//   expressAsyncHandler(async (req, res) => {
//     const airport = await Airport.findOneAndUpdate(
//       { _id: req.params.id },
//       {
//         code: req.body.airportCode,
//         name: req.body.airportName,
//         location: req.body.airportLocation,
//       },
//       { new: true }
//     );

//     const airports = await Airport.find({});
//     res.send(airports);
//     return;
//   })
// );

export default scheduleRouter;

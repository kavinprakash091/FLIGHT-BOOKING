import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../Utils.js';
import Airport from '../models/AirportModel.js';
import Flight from '../models/FlightsModel.js';
import Schedule from '../models/ScheduleModel.js';

const searchRouter = express.Router();

searchRouter.get(
  '/departure/:value',
  expressAsyncHandler(async (req, res) => {
    const schedules = await Schedule.find({
      departureAirport: req.params.value,
    });
    if (!schedules) {
      res.status(404).send({ message: 'No schedules found!' });
    }
    res.send(schedules.toArray());
    return;
  })
);

searchRouter.get(
  '/arrival/:value',
  expressAsyncHandler(async (req, res) => {
    const schedules = await Schedule.find({
      arrivalAirport: req.params.value,
    });
    if (!schedules) {
      res.status(404).send({ message: 'No schedules found!' });
    }
    res.send(schedules);
    return;
  })
);

searchRouter.get(
  '/date/:value',
  expressAsyncHandler(async (req, res) => {
    const schedules = await Schedule.find({
      date: new Date(req.params.value),
    });
    if (!schedules) {
      res.status(404).send({ message: 'No schedules found!' });
    }
    res.send(schedules);
    return;
  })
);

export default searchRouter;

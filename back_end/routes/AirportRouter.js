import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../Utils.js';
import Airport from '../models/AirportModel.js';

const airportRouter = express.Router();

airportRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const airports = await Airport.find({});
    if (!airports) {
      res.status(404).send({ message: 'No airports found!' });
    }
    res.send(airports);
    return;
  })
);

airportRouter.put(
  '/add',
  expressAsyncHandler(async (req, res) => {
    const airport = new Airport({
      code: req.body.airportCode,
      name: req.body.airportName,
      location: req.body.airportLocation,
    });
    await airport.save();

    const airports = await Airport.find({});
    res.send(airports);
    return;
  })
);

export default airportRouter;

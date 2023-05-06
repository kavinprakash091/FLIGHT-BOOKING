import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../Utils.js';
import Airport from '../models/AirportModel.js';

const airportRouter = express.Router();

airportRouter.put(
  '/add',
  expressAsyncHandler(async (req, res) => {
    const airport = new Airport({
      code: req.body.code,
      name: req.body.name,
      location: req.body.location,
    });
    await airport.save();

    const airports = await Airport.find({});
    res.send({ airports });
    return;
  })
);

export default airportRouter;

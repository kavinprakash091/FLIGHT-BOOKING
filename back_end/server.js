import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/UserRouter.js';
import airportRouter from './routes/AirportRouter.js';
import airlinesRouter from './routes/AirlinesRouter.js';
import flightRouter from './routes/FlightRouter.js';
import searchRouter from './routes/SearchRouter.js';
import scheduleRouter from './routes/ScheduleRouter.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to db');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.use('/api/airport', airportRouter);
app.use('/api/airlines', airlinesRouter);
app.use('/api/flights', flightRouter);
app.use('/api/schedules', scheduleRouter);
app.use('/api/search', searchRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

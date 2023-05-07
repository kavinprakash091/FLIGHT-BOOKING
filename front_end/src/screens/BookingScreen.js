import React, { useContext, useEffect, useReducer } from 'react';
import '../styles/BookingScreen.css';
import Navbar from '../components/Navbar';
import HomeSearch from '../components/HomeSearch';
import { Store } from '../Store';
import { getDate, getError } from '../Utils';
import { toast } from 'react-toastify';
import Axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_FAILED':
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default function BookingScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userDetails, flights } = state;

  const [{ loading }, dispatch] = useReducer(reducer, { loading: false });

  const fetchFlights = async () => {
    try {
      dispatch({ type: 'FETCH_REQUEST' });
      const { data } = await Axios.get('/api/flights/fetch');
      localStorage.setItem('flights', JSON.stringify(data));
      ctxDispatch({ type: 'ADD_FLIGHTS', payload: data });
      dispatch({ type: 'FETCH_SUCCESS' });
    } catch (err) {
      dispatch({ type: 'FETCH_FAILED' });
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <section className="booking-page">
      <Navbar />
      <HomeSearch />

      <div className="flight-booking-card-container">
        {flights &&
          flights.map((flight) =>
            flight.schedules.map((schedule) => (
              <div className="flight-booking-card" key={schedule._id}>
                <div className="flight-booking-card-image">
                  <img
                    src="https://images.ixigo.com/img/common-resources/airline-new/SG.png"
                    alt="image"
                  />
                  <p>
                    {flight.name} - {flight.number}
                    <br></br>
                    {flight.category} Flight
                  </p>
                </div>
                <div className="flight-route-details">
                  <div className="flight-departure-details">
                    <h2>{schedule.departureAirport}</h2>
                    <h1>{schedule.departureTime}</h1>
                    <h3>{getDate(schedule.date)}</h3>
                  </div>
                  <div className="line-container">
                    <h2>2hr 5min</h2>
                    <i className="fa-regular fa-clock"></i>
                  </div>
                  <div className="flight-arrival-details">
                    <h2>{schedule.arrivalAirport}</h2>
                    <h1>{schedule.arrivalTime}</h1>
                    <h3>{getDate(schedule.date)}</h3>
                  </div>
                </div>
                <div className="flight-fare-details">
                  {schedule.seats.map((seat, idx) => (
                    <div key={idx + 1}>
                      <h2>
                        {seat.class} -{' '}
                        <i className="fa-solid fa-indian-rupee-sign"></i>{' '}
                        {seat.fare}
                      </h2>
                      <p>Available {seat.countSeats} seats</p>
                    </div>
                  ))}
                </div>
                <button className="flight-book-button">BOOK</button>
              </div>
            ))
          )}
      </div>
    </section>
  );
}

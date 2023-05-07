import React, { useContext, useReducer, useState } from 'react';
import '../styles/TicketBookingScreen.css';
import Navbar from '../components/Navbar';
import ProgressIndicator from '../components/ProgressIndicator';
import { Store } from '../Store';
import { getDate } from '../Utils';
import { useParams } from 'react-router-dom';

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

export default function TicketBookingScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userDetails, flights, airports, schedules } = state;

  const [{ loading }, dispatch] = useReducer(reducer, { loading: false });

  const params = useParams();
  const { schedule: scheduleId } = params;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');

  var schedule;
  const findSchedule = () => {
    schedules.map((sch) => {
      if (sch._id === scheduleId) {
        schedule = sch;
      }
    });
  };

  findSchedule();

  var flight;
  const findFlight = () => {
    flights.map((flt) => {
      if (flt._id === schedule.flightId) {
        flight = flt;
      }
    });
  };

  findFlight();

  const bookTicketHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="ticket-booking-page">
      <Navbar />
      <ProgressIndicator progress={1} />
      <div className="ticket-booking-container">
        <div className="ticket-booking-container-header">
          <div className="ticket-booking-flight-image">
            <img
              src="https://images.ixigo.com/img/common-resources/airline-new/SG.png"
              alt="image"
            />
          </div>
          <h1>{flight.name}</h1>
          <h2>{flight.number}</h2>
          <h3>{flight.category} Flight</h3>
        </div>
        <div className="flight-booking-route-details">
          <div className="flight-route-details">
            <div className="flight-departure-details">
              <h2>
                {
                  airports.find(
                    (airport) => airport.code === schedule.departureAirport
                  ).locationCode
                }{' '}
                <br></br>
                <span>
                  (
                  {
                    airports.find(
                      (airport) => airport.code === schedule.departureAirport
                    ).location
                  }
                  )
                </span>
              </h2>
              <h1>{schedule.departureTime}</h1>
              <h3>{getDate(schedule.date)}</h3>
            </div>
            <div className="line-container">
              <h2>2hr 5min</h2>
              <i className="fa-regular fa-clock"></i>
            </div>
            <div className="flight-arrival-details">
              <h2>
                {
                  airports.find(
                    (airport) => airport.code === schedule.arrivalAirport
                  ).locationCode
                }{' '}
                <br></br>
                <span>
                  (
                  {
                    airports.find(
                      (airport) => airport.code === schedule.arrivalAirport
                    ).location
                  }
                  )
                </span>
              </h2>
              <h1>{schedule.arrivalTime}</h1>
              <h3>{getDate(schedule.date)}</h3>
            </div>
          </div>
          <div className="flight-fare-details">
            {schedule.seats.map((seat, idx) => (
              <div key={idx + 1}>
                <h2>
                  {seat.class} -{' '}
                  <i className="fa-solid fa-indian-rupee-sign"></i> {seat.fare}
                </h2>
                <p>Available {seat.countSeats} seats</p>
              </div>
            ))}
          </div>
        </div>
        <form className="travel-details-form" onSubmit={bookTicketHandler}>
          <div className="travel-details-form-header">
            Fill the passenger's informations correctly!
          </div>
          <div className="input-fields">
            <label htmlFor="firstName">
              First Name<span>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="input-fields">
            <label htmlFor="lastName">
              Last Name<span>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="input-fields">
            <label htmlFor="phone">
              Phone<span>*</span>
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="input-fields">
            <label htmlFor="age">
              Passenger Age<span>*</span>
            </label>
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div className="input-fields">
            <label htmlFor="gender">
              Passenger Gender<span>*</span>
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="input-fields">
            <label htmlFor="nationality">
              Nationality<span>*</span>
            </label>
            <input
              type="text"
              id="nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              required
            />
          </div>

          <div className="airport-form-button-container">
            <button type="reset" className="airport-cancel-button">
              CANCEL
            </button>
            <button type="submit" className="airport-add-button">
              CONTINUE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

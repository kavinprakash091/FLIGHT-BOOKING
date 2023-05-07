import React, { useContext, useReducer, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getDate, getError } from '../Utils';
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

export default function Flights({ airline }) {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userDetails, flights } = state;

  const [{ loading }, dispatch] = useReducer(reducer, { loading: false });

  const [isUpdate, setUpdate] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);
  const [bigFlightSchedules, setBigFlightSchedules] = useState(0);
  const [flightId, setFlightId] = useState('');

  const [departureAirport, setDepartureAirport] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [economySeats, setEconomySeats] = useState(0);
  const [economyFare, setEconomyFare] = useState(0);
  const [businessSeats, setBusinessSeats] = useState(0);
  const [businessFare, setBusinessFare] = useState(0);
  const [flightStatus, setFlightStatus] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const addScheduleHandler = async (e) => {
    e.preventDefault();
    setFormOpen(false);
    try {
      dispatch({ type: 'FETCH_REQUEST' });

      const seats = [
        {
          class: 'Economy',
          countSeats: Number(economySeats),
          fare: Number(economyFare),
        },
        {
          class: 'Business',
          countSeats: Number(businessSeats),
          fare: Number(businessFare),
        },
      ];

      const schedules = {
        departureAirport: departureAirport,
        departureTime: departureTime,
        arrivalAirport: arrivalAirport,
        arrivalTime: arrivalTime,
        seats: seats,
        status: flightStatus,
        date: new Date(departureDate),
      };

      const { data } = await Axios.put(
        `/api/flights/schedules/add/${flightId}`,
        {
          schedules,
        },
        {
          headers: { authorization: `Bearer ${userDetails.token}` },
        }
      );
      localStorage.setItem('flights', JSON.stringify(data));
      ctxDispatch({ type: 'ADD_FLIGHTS', payload: data });
      toast.success('Scheduled successfully!');
      dispatch({ type: 'FETCH_SUCCESS' });
    } catch (err) {
      dispatch({ type: 'FETCH_FAILED' });
      toast.error(getError(err));
    }
  };

  return (
    <section className="flight-list-container">
      {flights &&
        flights.map(
          (flight, index) =>
            flight.airlineId === airline._id && (
              <div
                className={
                  bigFlightSchedules === index + 1
                    ? 'airlines-list-container big-airlines-list-container'
                    : 'airlines-list-container'
                }
                key={index + 1}
              >
                <div className="airlines-list-container-header">
                  <div className="airlines-image-container">
                    <div className="airlines-image">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8i3TloHnlczFAInYtSYsFzhk-SQGL_E22A&usqp=CAU" />
                    </div>
                    <div>
                      <h3>{flight.name}</h3>
                      <p>{flight.number}</p>
                      <p>{flight.category} flight</p>
                    </div>
                  </div>
                  <div className="airline-button-container">
                    <Link
                      to={`/dashboard/${flight._id}`}
                      onClick={() => {
                        setFormOpen(true);
                        setFlightId(flight._id);
                      }}
                      className="admin-add-button"
                    >
                      ADD SCHEDULES
                    </Link>
                    <Link
                      to={`/dashboard/${flight._id}`}
                      // onClick={() => deleteAirline(airline.name, airline._id)}
                      className="admin-add-button airport-card-delete-button"
                    >
                      DELETE AIRLINES
                    </Link>
                  </div>
                </div>

                <div className="flights-schedule-list-container">
                  {flight.schedules.map((schedule) => (
                    <div className="flight-booking-card" key={schedule._id}>
                      <div className="flight-booking-card-image">
                        <img
                          src="https://images.ixigo.com/img/common-resources/airline-new/SG.png"
                          alt="image"
                        />
                        <p>
                          {flight.name} - {flight.number}
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
                  ))}
                </div>
                <h5
                  onClick={() => {
                    bigFlightSchedules === index + 1
                      ? setBigFlightSchedules(0)
                      : setBigFlightSchedules(index + 1);
                  }}
                >
                  {bigFlightSchedules === index + 1
                    ? 'Hide schedules '
                    : 'View schedules '}
                  <i
                    className={
                      bigFlightSchedules === index + 1
                        ? 'fa-solid fa-angle-up'
                        : 'fa-solid fa-angle-down'
                    }
                  ></i>
                </h5>
              </div>
            )
        )}
      <form
        className={
          isFormOpen
            ? 'add-airport-form add-schedule-form active-add-airport-form'
            : 'add-airport-form add-schedule-form'
        }
        onSubmit={addScheduleHandler}
      >
        <div className="add-airport-form-header">
          <h3>ADD SCHEDULES</h3>
          <i
            onClick={() => {
              setFormOpen(false);
            }}
            className="fa-solid fa-xmark"
          ></i>
        </div>

        <div className="input-fields">
          <label htmlFor="departureAirport">
            Departure Airport<span>*</span>
          </label>
          <input
            type="text"
            id="departureAirport"
            value={departureAirport}
            onChange={(e) => setDepartureAirport(e.target.value)}
            required
          />
        </div>

        <div className="input-fields">
          <label htmlFor="departureTime">
            Departure Time<span>*</span>
          </label>
          <input
            type="time"
            id="departureTime"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            required
          />
        </div>

        <div className="input-fields">
          <label htmlFor="arrivalAirport">
            Arrival Airport<span>*</span>
          </label>
          <input
            type="text"
            id="arrivalAirport"
            value={arrivalAirport}
            onChange={(e) => setArrivalAirport(e.target.value)}
            required
          />
        </div>

        <div className="input-fields">
          <label htmlFor="arrivalTime">
            Arrival Time<span>*</span>
          </label>
          <input
            type="time"
            id="arrivalTime"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            required
          />
        </div>

        <div className="input-fields">
          <label htmlFor="economySeats">
            Economy Seats<span>*</span>
          </label>
          <input
            type="text"
            id="economySeats"
            value={economySeats}
            onChange={(e) => setEconomySeats(e.target.value)}
            required
          />
        </div>

        <div className="input-fields">
          <label htmlFor="economyFare">
            Economy Fare<span>*</span>
          </label>
          <input
            type="text"
            id="economyFare"
            value={economyFare}
            onChange={(e) => setEconomyFare(e.target.value)}
            required
          />
        </div>

        <div className="input-fields">
          <label htmlFor="businessSeats">
            Business Seats<span>*</span>
          </label>
          <input
            type="text"
            id="businessSeats"
            value={businessSeats}
            onChange={(e) => setBusinessSeats(e.target.value)}
            required
          />
        </div>

        <div className="input-fields">
          <label htmlFor="businessFare">
            Business Fare<span>*</span>
          </label>
          <input
            type="text"
            id="businessFare"
            value={businessFare}
            onChange={(e) => setBusinessFare(e.target.value)}
            required
          />
        </div>

        <div className="input-fields">
          <label htmlFor="status">
            Status<span>*</span>
          </label>
          <select
            id="status"
            value={flightStatus}
            onChange={(e) => setFlightStatus(e.target.value)}
          >
            <option></option>
            <option value="Delay">Delay</option>
            <option value="On time">On time</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div className="input-fields">
          <label htmlFor="date">
            Date<span>*</span>
          </label>
          <input
            type="date"
            id="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
          />
        </div>

        <div className="airport-form-button-container">
          <button type="reset" className="airport-cancel-button">
            CANCEL
          </button>
          <button type="submit" className="airport-add-button">
            {isUpdate ? 'SAVE' : 'ADD'}
          </button>
        </div>
      </form>
    </section>
  );
}

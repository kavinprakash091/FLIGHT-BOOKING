import React, { useContext, useReducer, useState } from 'react';
import { Store } from '../Store';
import Axios from 'axios';
import { getError } from '../Utils';
import { toast } from 'react-toastify';

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

export default function Airlines() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userDetails, airports } = state;

  const [{ loading }, dispatch] = useReducer(reducer, { loading: false });

  const [isUpdate, setUpdate] = useState(false);
  const [isFormOpen, setFormOpen] = useState(0);
  const [bigAirlines, setBigAirlines] = useState(false);
  const [bigFlightSchedules, setBigFlightSchedules] = useState(false);

  const [airlinesName, setAirlinesName] = useState('');

  const addAirlinesHandler = async (e) => {
    e.preventDefault();
    setFormOpen(false);

    try {
      dispatch({ type: 'FETCH_REQUEST' });
      const { data } = await Axios.put(
        '/api/airlines/add',
        {
          airlinesName,
        },
        {
          headers: { authorization: `Bearer ${userDetails.token}` },
        }
      );
      localStorage.setItem('airlines', JSON.stringify(data));
      ctxDispatch({ type: 'ADD_AIRLINES', payload: data });
      toast.success(airlinesName + ' added successfully!');
      dispatch({ type: 'FETCH_SUCCESS' });
    } catch (err) {
      dispatch({ type: 'FETCH_FAILED' });
      toast.error(getError(err));
    }
  };

  return (
    <section className="airport-container">
      <div className="airport-container-header">
        <h3>AIRLINES</h3>
        <button onClick={() => setFormOpen(1)} className="admin-add-button">
          ADD AIRLINES
        </button>
      </div>
      <div className="airport-list-container">
        <div
          className={
            bigAirlines
              ? 'airlines-list-container big-airlines-list-container'
              : 'airlines-list-container'
          }
        >
          <div className="airlines-list-container-header">
            <div className="airlines-image-container">
              <div className="airlines-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8i3TloHnlczFAInYtSYsFzhk-SQGL_E22A&usqp=CAU" />
              </div>
              <div>
                <h3>AIRLINE NAME</h3>
                <p>2 flights</p>
              </div>
            </div>
            <button onClick={() => setFormOpen(2)} className="admin-add-button">
              ADD FLIGHTS
            </button>
          </div>
          <div className="flights-list-container">
            <div
              className={
                bigFlightSchedules
                  ? 'flights-list-card big-flights-list-card'
                  : 'flights-list-card'
              }
            >
              <div className="flights-list-card-header">
                <div className="airlines-image-container">
                  <div className="airlines-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8i3TloHnlczFAInYtSYsFzhk-SQGL_E22A&usqp=CAU" />
                  </div>
                  <div>
                    <h3>AIRLINE NAME</h3>
                    <p>2 flights</p>
                  </div>
                </div>
                <button
                  onClick={() => setFormOpen(3)}
                  className="admin-add-button"
                >
                  ADD SCHEDULES
                </button>
              </div>
              <div className="flights-schedule-list-container">
                <div className="flight-booking-card">
                  <div className="flight-booking-card-image">
                    <img
                      src="https://images.ixigo.com/img/common-resources/airline-new/SG.png"
                      alt="image"
                    />
                  </div>
                  <div className="flight-route-details">
                    <div className="flight-departure-details">
                      <h2>Delhi</h2>
                      <h1>23:10</h1>
                      <h3>10 August 2023</h3>
                    </div>
                    <div className="line-container">
                      <h2>2hr 5min</h2>
                      <i className="fa-regular fa-clock"></i>
                    </div>
                    <div className="flight-arrival-details">
                      <h2>Delhi</h2>
                      <h1>23:10</h1>
                      <h3>10 August 2023</h3>
                    </div>
                  </div>
                  <div className="flight-fare-details">
                    <h2>
                      Economy -{' '}
                      <i className="fa-solid fa-indian-rupee-sign"></i> 6051
                    </h2>
                    <p>Available 20 seats</p>
                    <h2>
                      Business -{' '}
                      <i className="fa-solid fa-indian-rupee-sign"></i> 7016
                    </h2>
                    <p>Available 20 seats</p>
                  </div>
                  <button className="flight-book-button">BOOK</button>
                </div>
              </div>
            </div>

            <h5 onClick={() => setBigFlightSchedules(!bigFlightSchedules)}>
              {bigFlightSchedules ? 'Hide schedules ' : 'View schedules '}
              <i
                className={
                  bigFlightSchedules
                    ? 'fa-solid fa-angle-up'
                    : 'fa-solid fa-angle-down'
                }
              ></i>
            </h5>
          </div>
        </div>
        <h5 onClick={() => setBigAirlines(!bigAirlines)}>
          {bigAirlines ? 'Hide flights ' : 'View flights '}
          <i
            className={
              bigAirlines ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'
            }
          ></i>
        </h5>
      </div>

      <form
        className={
          isFormOpen === 1
            ? 'add-airport-form active-add-airport-form'
            : 'add-airport-form'
        }
        onSubmit={addAirlinesHandler}
      >
        <div className="add-airport-form-header">
          <h3>ADD AIRLINES</h3>
          <i
            onClick={() => {
              setFormOpen(0);
            }}
            className="fa-solid fa-xmark"
          ></i>
        </div>
        <div className="input-fields">
          <label htmlFor="airlineName">
            Airlines Name<span>*</span>
          </label>
          <input
            type="text"
            id="airlineName"
            value={airlinesName}
            onChange={(e) => setAirlinesName(e.target.value)}
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
      <form
        className={
          isFormOpen === 2
            ? 'add-airport-form active-add-airport-form'
            : 'add-airport-form'
        }
        // onSubmit={isUpdate ? updateAirportHandler : addAirportHandler}
      >
        <div className="add-airport-form-header">
          <h3>ADD FLIGHTS</h3>
          <i
            onClick={() => {
              setFormOpen(0);
            }}
            className="fa-solid fa-xmark"
          ></i>
        </div>

        <div className="input-fields">
          <label htmlFor="flightNumber">
            Flight Number<span>*</span>
          </label>
          <input type="text" id="flightNumber" required />
        </div>

        <div className="input-fields">
          <label htmlFor="flightName">
            Flight Name<span>*</span>
          </label>
          <input type="text" id="flightName" required />
        </div>

        <div className="input-fields">
          <label htmlFor="flightCategory">
            Flight Category<span>*</span>
          </label>
          <select id="flightCategory">
            <option value="Domestic">Domestic</option>
            <option value="International">International</option>
          </select>
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
      <form
        className={
          isFormOpen === 3
            ? 'add-airport-form active-add-airport-form'
            : 'add-airport-form'
        }
        // onSubmit={isUpdate ? updateAirportHandler : addAirportHandler}
      >
        <div className="add-airport-form-header">
          <h3>ADD SCHEDULES</h3>
          <i
            onClick={() => {
              setFormOpen(0);
            }}
            className="fa-solid fa-xmark"
          ></i>
        </div>

        <div className="input-fields">
          <label htmlFor="departureAirport">
            Departure Airport<span>*</span>
          </label>
          <input type="text" id="departureAirport" required />
        </div>

        <div className="input-fields">
          <label htmlFor="departureTime">
            Departure Time<span>*</span>
          </label>
          <input type="time" id="departureTime" required />
        </div>

        <div className="input-fields">
          <label htmlFor="arrivalAirport">
            Arrival Airport<span>*</span>
          </label>
          <input type="text" id="arrivalAirport" required />
        </div>

        <div className="input-fields">
          <label htmlFor="arrivalTime">
            Arrival Time<span>*</span>
          </label>
          <input type="time" id="arrivalTime" required />
        </div>

        <div className="input-fields">
          <label htmlFor="economySeats">
            Economy Seats<span>*</span>
          </label>
          <input type="text" id="economySeats" required />
        </div>

        <div className="input-fields">
          <label htmlFor="economyFare">
            Economy Fare<span>*</span>
          </label>
          <input type="text" id="economyFare" required />
        </div>

        <div className="input-fields">
          <label htmlFor="businessSeats">
            Business Seats<span>*</span>
          </label>
          <input type="text" id="businessSeats" required />
        </div>

        <div className="input-fields">
          <label htmlFor="businessFare">
            Business Fare<span>*</span>
          </label>
          <input type="text" id="businessFare" required />
        </div>

        <div className="input-fields">
          <label htmlFor="status">
            Status<span>*</span>
          </label>
          <select id="status">
            <option value="Delay">Delay</option>
            <option value="On time">On time</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div className="input-fields">
          <label htmlFor="date">
            Date<span>*</span>
          </label>
          <input type="date" id="date" required />
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

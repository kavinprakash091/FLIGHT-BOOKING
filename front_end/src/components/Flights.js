import React, { useContext, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';

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
                      onClick={() => setFormOpen(true)}
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
    </section>
  );
}

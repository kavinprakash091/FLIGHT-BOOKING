import React, { useState } from 'react';
import '../styles/HomeScreen.css';
import { Link } from 'react-router-dom';

export default function HomeSearch() {
  const [isActiveNav, setActiveNav] = useState(1);
  return (
    <section className="booking-search-container home-search">
      <form className="booking-search-form">
        <div className="input-fields">
          <label htmlFor="departureAirport">Departure Airport</label>
          <input type="text" id="departureAirport" />
        </div>
        <i className="fa-solid fa-right-left"></i>
        <div className="input-fields">
          <label htmlFor="arrivalAirport">Arrival Airport</label>
          <input type="text" id="arrivalAirport" />
        </div>
        <div className="input-fields">
          <label htmlFor="departureAirport">Departure Time</label>
          <input type="date" id="departureTimet" />
        </div>
        <button className="booking-search-button">SEARCH</button>
      </form>
    </section>
  );
}

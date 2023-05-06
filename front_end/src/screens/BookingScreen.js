import React from 'react';
import '../styles/BookingScreen.css';
import Navbar from '../components/Navbar';

export default function BookingScreen() {
  return (
    <section className="booking-page">
      <Navbar />
      <div className="booking-search-container">
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
      </div>

      <div className="flight-booking-card-container">
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
              Economy - <i className="fa-solid fa-indian-rupee-sign"></i> 6051
            </h2>
            <p>Available 20 seats</p>
            <h2>
              Business - <i className="fa-solid fa-indian-rupee-sign"></i> 7016
            </h2>
            <p>Available 20 seats</p>
          </div>
          <button className="flight-book-button">BOOK</button>
        </div>
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
              Economy - <i className="fa-solid fa-indian-rupee-sign"></i> 6051
            </h2>
            <p>Available 20 seats</p>
            <h2>
              Business - <i className="fa-solid fa-indian-rupee-sign"></i> 7016
            </h2>
            <p>Available 20 seats</p>
          </div>
          <button className="flight-book-button">BOOK</button>
        </div>
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
              Economy - <i className="fa-solid fa-indian-rupee-sign"></i> 6051
            </h2>
            <p>Available 20 seats</p>
            <h2>
              Business - <i className="fa-solid fa-indian-rupee-sign"></i> 7016
            </h2>
            <p>Available 20 seats</p>
          </div>
          <button className="flight-book-button">BOOK</button>
        </div>
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
              Economy - <i className="fa-solid fa-indian-rupee-sign"></i> 6051
            </h2>
            <p>Available 20 seats</p>
            <h2>
              Business - <i className="fa-solid fa-indian-rupee-sign"></i> 7016
            </h2>
            <p>Available 20 seats</p>
          </div>
          <button className="flight-book-button">BOOK</button>
        </div>
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
              Economy - <i className="fa-solid fa-indian-rupee-sign"></i> 6051
            </h2>
            <p>Available 20 seats</p>
            <h2>
              Business - <i className="fa-solid fa-indian-rupee-sign"></i> 7016
            </h2>
            <p>Available 20 seats</p>
          </div>
          <button className="flight-book-button">BOOK</button>
        </div>
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
              Economy - <i className="fa-solid fa-indian-rupee-sign"></i> 6051
            </h2>
            <p>Available 20 seats</p>
            <h2>
              Business - <i className="fa-solid fa-indian-rupee-sign"></i> 7016
            </h2>
            <p>Available 20 seats</p>
          </div>
          <button className="flight-book-button">BOOK</button>
        </div>
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
              Economy - <i className="fa-solid fa-indian-rupee-sign"></i> 6051
            </h2>
            <p>Available 20 seats</p>
            <h2>
              Business - <i className="fa-solid fa-indian-rupee-sign"></i> 7016
            </h2>
            <p>Available 20 seats</p>
          </div>
          <button className="flight-book-button">BOOK</button>
        </div>
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
              Economy - <i className="fa-solid fa-indian-rupee-sign"></i> 6051
            </h2>
            <p>Available 20 seats</p>
            <h2>
              Business - <i className="fa-solid fa-indian-rupee-sign"></i> 7016
            </h2>
            <p>Available 20 seats</p>
          </div>
          <button className="flight-book-button">BOOK</button>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import '../styles/HomeScreen.css';

export default function BestOffer() {
  return (
    <section className="best-flight-offer-container">
      <h1>Best Flight Booking Offers</h1>
      <div className="best-flight-offer-card-container">
        <div className="best-flight-offer-card">
          <div className="best-flight-offer-card-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3QZG_ji_DnObJiNB1X91L2JBr5qs6ilcVeA&usqp=CAU"
              alt="image"
            />
            <h3>Get Offer and happy journey</h3>
          </div>
        </div>
        <div className="best-flight-offer-card">
          <div className="best-flight-offer-card-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3QZG_ji_DnObJiNB1X91L2JBr5qs6ilcVeA&usqp=CAU"
              alt="image"
            />
            <h3>Get Offer and happy journey</h3>
          </div>
        </div>
        <div className="best-flight-offer-card">
          <div className="best-flight-offer-card-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3QZG_ji_DnObJiNB1X91L2JBr5qs6ilcVeA&usqp=CAU"
              alt="image"
            />
            <h3>Get Offer and happy journey</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

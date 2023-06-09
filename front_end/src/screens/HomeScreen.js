import React from 'react';
import '../styles/HomeScreen.css';
import Navbar from '../components/Navbar';
import HomeSlider from '../components/HomeSlider';
import HomeSearch from '../components/HomeSearch';
import BestOffer from '../components/BestOffer';
import BestRoute from '../components/BestRoute';
import PopularRoutes from '../components/PopularRoutes';
import FlightUpdates from '../components/FlightUpdates';
import NewsLetter from '../components/NewsLetter';

export default function HomeScreen() {
  return (
    <section className="home-page">
      <Navbar />
      <HomeSlider />
      <div className="home-search">
        <HomeSearch />
      </div>
      <BestOffer />
      <BestRoute />
      <PopularRoutes />
      <FlightUpdates />
      <NewsLetter />
    </section>
  );
}

import React from 'react';
import '../styles/HomeScreen.css';
import Navbar from '../components/Navbar';
import HomeSlider from '../components/HomeSlider';
import HomeSearch from '../components/HomeSearch';

export default function HomeScreen() {
  return (
    <section className="home-page">
      <Navbar />
      <HomeSlider />
      <HomeSearch />
    </section>
  );
}

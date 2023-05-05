import React, { useState } from 'react';
import '../styles/HomeScreen.css';
import { Link } from 'react-router-dom';

export default function HomeSearch() {
  const [isActiveNav, setActiveNav] = useState(1);
  return (
    <section className="home-search-container">
      <ul className="home-search-container-header">
        <li className={isActiveNav === 1 && 'active-home-search-header'}>
          ONE WAY
        </li>
        <li className={isActiveNav === 2 && 'active-home-search-header'}>
          ROUND TRIP
        </li>
        <li className={isActiveNav === 3 && 'active-home-search-header'}>
          <Link to="#explore">EXPLORE</Link>
        </li>
      </ul>
    </section>
  );
}

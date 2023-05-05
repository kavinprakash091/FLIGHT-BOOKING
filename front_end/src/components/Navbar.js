import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed-navbar">
      <div className="navbar-brand">
        <h1>FlyHigh</h1>
      </div>

      <div className="navbar-items">
        <Link to="/">Home</Link>
        <Link to="/users/bookings">Bookings</Link>
        <Link to="/users/activities">Activities</Link>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="user-profile-container">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </nav>
  );
}

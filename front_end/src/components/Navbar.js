import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import { toast } from 'react-toastify';

export default function Navbar() {
  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userDetails } = state;

  const signoutHandler = () => {
    localStorage.removeItem('userDetails');
    localStorage.removeItem('airports');
    localStorage.removeItem('airlines');
    localStorage.removeItem('flights');
    localStorage.removeItem('schedules');
    localStorage.removeItem('activities');
    ctxDispatch({ type: 'SIGN_OUT' });
    navigate('/');
    toast.success(userDetails.users.firstname + ' signed out successfully!');
  };

  return (
    <nav className="fixed-navbar">
      <div className="navbar-brand">
        <h1>FlyHigh</h1>
      </div>

      <div className="navbar-items">
        <Link to="/">Home</Link>
        {userDetails && userDetails.users.userType !== 'customer' && (
          <Link to="/dashboard">Dashboard</Link>
        )}
        <Link to="/bookings">Bookings</Link>
        <Link to="/activities">Activities</Link>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      {userDetails ? (
        <div className="user-profile-container">
          <Link to="/user/profile">
            {userDetails.users.firstname} <i className="fa-solid fa-user"></i>
          </Link>
          <Link to="#" onClick={signoutHandler}>
            Log out
          </Link>
        </div>
      ) : (
        <div className="user-profile-container">
          <Link to="/signin">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}
    </nav>
  );
}

import React from 'react';
import '../styles/DashboardScreen.css';
import Navbar from '../components/Navbar';
import Airport from '../components/Airport';

export default function DashboardScreen() {
  return (
    <section className="dashboard-page">
      <Navbar />
      <div className="dashboard-detail-container">
        <Airport />
      </div>
    </section>
  );
}

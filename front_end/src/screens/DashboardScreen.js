import React, { useContext, useState } from 'react';
import '../styles/DashboardScreen.css';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';
import { getError } from '../Utils';
import Axios from 'axios';
import { Store } from '../Store';

export default function DashboardScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userDetails } = state;

  const [isFormOpen, setFormOpen] = useState(false);
  const [airportCode, setAirportCode] = useState('');
  const [airportName, setAirportName] = useState('');
  const [airportLocation, setAirportLoctaion] = useState('');

  const addAirportHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.put(
        '/api/airport/add',
        {
          airportCode,
          airportName,
          airportLocation,
        },
        {
          headers: { authorization: `Bearer ${userDetails.token}` },
        }
      );
      console.log(data);
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <section className="dashboard-page">
      <Navbar />
      <div className="dashboard-detail-container">
        <div className="airport-container">
          <div className="airport-container-header">
            <h3>AIRPORTS</h3>
            <button
              onClick={() => setFormOpen(true)}
              className="admin-add-button"
            >
              ADD AIRPORT
            </button>
          </div>
          <div className="airport-list-container">
            <div className="airport-card">
              <div className="airport-card-image">
                <img
                  src="https://www.shutterstock.com/image-photo/airport-many-airplanes-beautiful-sunset-260nw-324754607.jpg"
                  alt="image"
                />
              </div>
              <div className="airport-card-detail">
                <h2>Airport name</h2>
                <h3>Airport code</h3>
                <h4>Airport location</h4>
              </div>
              <div className="airport-card-button-container">
                <button className="airport-card-edit-button">EDIT</button>
                <button className="airport-card-delete-button">DELETE</button>
              </div>
            </div>
            <div className="airport-card">
              <div className="airport-card-image">
                <img
                  src="https://www.shutterstock.com/image-photo/airport-many-airplanes-beautiful-sunset-260nw-324754607.jpg"
                  alt="image"
                />
              </div>
              <div className="airport-card-detail">
                <h2>Airport name</h2>
                <h3>Airport code</h3>
                <h4>Airport location</h4>
              </div>
              <div className="airport-card-button-container">
                <button className="airport-card-edit-button">EDIT</button>
                <button className="airport-card-delete-button">DELETE</button>
              </div>
            </div>
            <div className="airport-card">
              <div className="airport-card-image">
                <img
                  src="https://www.shutterstock.com/image-photo/airport-many-airplanes-beautiful-sunset-260nw-324754607.jpg"
                  alt="image"
                />
              </div>
              <div className="airport-card-detail">
                <h2>Airport name</h2>
                <h3>Airport code</h3>
                <h4>Airport location</h4>
              </div>
              <div className="airport-card-button-container">
                <button className="airport-card-edit-button">EDIT</button>
                <button className="airport-card-delete-button">DELETE</button>
              </div>
            </div>
            <div className="airport-card">
              <div className="airport-card-image">
                <img
                  src="https://www.shutterstock.com/image-photo/airport-many-airplanes-beautiful-sunset-260nw-324754607.jpg"
                  alt="image"
                />
              </div>
              <div className="airport-card-detail">
                <h2>Airport name</h2>
                <h3>Airport code</h3>
                <h4>Airport location</h4>
              </div>
              <div className="airport-card-button-container">
                <button className="airport-card-edit-button">EDIT</button>
                <button className="airport-card-delete-button">DELETE</button>
              </div>
            </div>
            <div className="airport-card">
              <div className="airport-card-image">
                <img
                  src="https://www.shutterstock.com/image-photo/airport-many-airplanes-beautiful-sunset-260nw-324754607.jpg"
                  alt="image"
                />
              </div>
              <div className="airport-card-detail">
                <h2>Airport name</h2>
                <h3>Airport code</h3>
                <h4>Airport location</h4>
              </div>
              <div className="airport-card-button-container">
                <button className="airport-card-edit-button">EDIT</button>
                <button className="airport-card-delete-button">DELETE</button>
              </div>
            </div>
            <div className="airport-card">
              <div className="airport-card-image">
                <img
                  src="https://www.shutterstock.com/image-photo/airport-many-airplanes-beautiful-sunset-260nw-324754607.jpg"
                  alt="image"
                />
              </div>
              <div className="airport-card-detail">
                <h2>Airport name</h2>
                <h3>Airport code</h3>
                <h4>Airport location</h4>
              </div>
              <div className="airport-card-button-container">
                <button className="airport-card-edit-button">EDIT</button>
                <button className="airport-card-delete-button">DELETE</button>
              </div>
            </div>
            <div className="airport-card">
              <div className="airport-card-image">
                <img
                  src="https://www.shutterstock.com/image-photo/airport-many-airplanes-beautiful-sunset-260nw-324754607.jpg"
                  alt="image"
                />
              </div>
              <div className="airport-card-detail">
                <h2>Airport name</h2>
                <h3>Airport code</h3>
                <h4>Airport location</h4>
              </div>
              <div className="airport-card-button-container">
                <button className="airport-card-edit-button">EDIT</button>
                <button className="airport-card-delete-button">DELETE</button>
              </div>
            </div>
          </div>
          <form
            className={
              isFormOpen
                ? 'add-airport-form active-add-airport-form'
                : 'add-airport-form'
            }
            onSubmit={addAirportHandler}
          >
            <div className="add-airport-form-header">
              <h3>ADD AIRPORT</h3>
              <i
                onClick={() => setFormOpen(false)}
                className="fa-solid fa-xmark"
              ></i>
            </div>
            <div className="input-fields">
              <label htmlFor="airportCode">
                Airport Code<span>*</span>
              </label>
              <input
                type="text"
                id="airportCode"
                value={airportCode}
                onChange={(e) => setAirportCode(e.target.value)}
                required
              />
            </div>
            <div className="input-fields">
              <label htmlFor="airportName">
                Airport name<span>*</span>
              </label>
              <input
                type="text"
                id="airportName"
                value={airportName}
                onChange={(e) => setAirportName(e.target.value)}
                required
              />
            </div>
            <div className="input-fields">
              <label htmlFor="airportLocation">
                Airport Location<span>*</span>
              </label>
              <input
                type="text"
                id="airportLocation"
                value={airportLocation}
                onChange={(e) => setAirportLoctaion(e.target.value)}
                required
              />
            </div>
            <div className="airport-form-button-container">
              <button type="reset" className="airport-cancel-button">
                CANCEL
              </button>
              <button type="submit" className="airport-add-button">
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

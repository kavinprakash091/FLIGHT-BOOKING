import React from 'react';

export default function Airlines() {
  return (
    <section className="airport-container">
      <div className="airport-container-header">
        <h3> AIRLINES </h3>{' '}
        <button onClick={() => setFormOpen(true)} className="admin-add-button">
          ADD AIRLINES{' '}
        </button>{' '}
      </div>{' '}
      <div className="airport-list-container">
        {' '}
        {airports &&
          airports.map((airport) => (
            <div className="airport-card" key={airport._id}>
              <div className="airport-card-image">
                <img
                  src="https://www.shutterstock.com/image-photo/airport-many-airplanes-beautiful-sunset-260nw-324754607.jpg"
                  alt="image"
                />
              </div>{' '}
              <div className="airport-card-detail">
                <h2> {airport.name} </h2> <h3> {airport.code} </h3>{' '}
                <h4> {airport.location} </h4>{' '}
              </div>{' '}
              <div className="airport-card-button-container">
                <button
                  onClick={() =>
                    updateAirport(
                      airport._id,
                      airport.code,
                      airport.name,
                      airport.location
                    )
                  }
                  className="airport-card-edit-button"
                >
                  EDIT{' '}
                </button>{' '}
                <button
                  onClick={() => deleteAirport(airport._id, airport.name)}
                  className="airport-card-delete-button"
                >
                  DELETE{' '}
                </button>{' '}
              </div>{' '}
            </div>
          ))}{' '}
      </div>{' '}
      <form
        className={
          isFormOpen
            ? 'add-airport-form active-add-airport-form'
            : 'add-airport-form'
        }
        onSubmit={isUpdate ? updateAirportHandler : addAirportHandler}
      >
        <div className="add-airport-form-header">
          <h3> ADD AIRPORT </h3>{' '}
          <i
            onClick={() => {
              setFormOpen(false);
              setAirportCode('');
              setAirportName('');
              setAirportLoctaion('');
            }}
            className="fa-solid fa-xmark"
          ></i>{' '}
        </div>{' '}
        <div className="input-fields">
          <label htmlFor="airportCode">
            Airport Code <span> * </span>{' '}
          </label>{' '}
          <input
            type="text"
            id="airportCode"
            value={airportCode}
            onChange={(e) => setAirportCode(e.target.value)}
            required
          />
        </div>{' '}
        <div className="input-fields">
          <label htmlFor="airportName">
            Airport name <span> * </span>{' '}
          </label>{' '}
          <input
            type="text"
            id="airportName"
            value={airportName}
            onChange={(e) => setAirportName(e.target.value)}
            required
          />
        </div>{' '}
        <div className="input-fields">
          <label htmlFor="airportLocation">
            Airport Location <span> * </span>{' '}
          </label>{' '}
          <input
            type="text"
            id="airportLocation"
            value={airportLocation}
            onChange={(e) => setAirportLoctaion(e.target.value)}
            required
          />
        </div>{' '}
        <div className="airport-form-button-container">
          <button type="reset" className="airport-cancel-button">
            CANCEL{' '}
          </button>{' '}
          <button type="submit" className="airport-add-button">
            {' '}
            {isUpdate ? 'SAVE' : 'ADD'}{' '}
          </button>{' '}
        </div>{' '}
      </form>{' '}
    </section>
  );
}

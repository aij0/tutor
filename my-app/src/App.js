import React, { Component } from 'react';
import './App.css';
import Tutor from './components/tutor';

class App extends Component{
  render() {
    const tutor = {
        "id": 1,
        "name": "Mikko MOuru",
        "subject": "CAD",
        "imageUrl": "https://raw.githubusercontent.com/aij0/tutor-data/main/pictures/2.png",
        "price": 9990,
        "priceCurrency": "EUR",
        "lat": 60.1675,
        "lng": 24.9311
    };

    const tutors = [ tutor, tutor, tutor];

    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="tutors">
            {tutors.map(function(tutor) {
              return <Tutor tutor={tutor} />
            })}
          </div>
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
}

export default App;

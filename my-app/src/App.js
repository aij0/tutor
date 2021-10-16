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

    return (
      <div>
        <Tutor tutor={tutor} />
      </div>
    );
  }
}

export default App;

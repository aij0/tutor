import React, { Component } from 'react';
import './App.css';
import Tutor from './components/tutor';
import Marker from './components/marker';
import GoogleMapReact from 'google-map-react';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      tutors: [],
      selectedTutor: null
    };
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/aij0/tutor-data/main/tutors.json";
    fetch(url)
    .then(response => response.json())
    .then( (data) => {
      this.setState({
        tutors: data
      });
    })
  }

  selectTutor = (tutor) => {
    console.log(tutor);
    this.setState({
      selectedTutor: tutor
    })
  }

  render() {
    const center = {
      lat: 60.1699,
      lng: 24.9384
    }

    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="tutors">
            {this.state.tutors.map((tutor) => {
              return <Tutor
               key={tutor.name}
               tutor={tutor}
               selectTutor={this.selectTutor}/>
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact center={center} zoom={13}>
            {this.state.tutors.map(function(tutor) {
                  return <Marker key={tutor.name} lat={tutor.lat} lng={tutor.lng}
                  text={tutor.price} />
                })}  
        </GoogleMapReact> 
        </div>
      </div>
    );
  }
}

export default App;

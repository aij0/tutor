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
      allTutors: [],
      selectedTutor: null,
      search: ""
    };
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/aij0/tutor-data/main/tutors.json";
    fetch(url)
    .then(response => response.json())
    .then( (data) => {
      this.setState({
        tutors: data,
        allTutors: data
      });
    })
  }

  selectTutor = (tutor) => {
    console.log(tutor);
    this.setState({
      selectedTutor: tutor
    })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      tutors: this.state.allTutors.filter((tutor) => new RegExp(event.target.value, "i").exec(tutor.subject))
    });
  }

  render() {
    let center = {
      lat: 60.1699,
      lng: 24.9384
    }
    // center based on clicked tutor
    if (this.state.selectedTutor) {
      center = {
        lat: this.state.selectedTutor.lat,
        lng: this.state.selectedTutor.lng
      }
    }

    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleSearch} />
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
            {this.state.tutors.map((tutor) => {
                  return <Marker 
                    key={tutor.name} 
                    lat={tutor.lat} 
                    lng={tutor.lng}
                    text={tutor.price}
                    selected={tutor === this.state.selectedTutor} />
                })}  
        </GoogleMapReact> 
        </div>
      </div>
    );
  }
}

export default App;

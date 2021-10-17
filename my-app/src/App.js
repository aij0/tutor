import React, { Component } from 'react';
import './App.css';
import Tutor from './components/tutor';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      tutors: []
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

  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="tutors">
            {this.state.tutors.map(function(tutor) {
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

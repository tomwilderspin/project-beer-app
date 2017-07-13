import React, { Component } from 'react';

import MapContainer from '../Map/MapContainer';
import NavBar from '../Navigation/NavBarComponent';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <MapContainer />
      </div>
    );
  }
}

export default App;

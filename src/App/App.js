import React, { Component } from 'react';

import GoogleMap from '../Map/GoogleMapComponent';
import './App.css';

class App extends Component {

  render() {

    const centerLat = 29.9717272;
    const centerLong = -90.1056957;
    const initZoom = 10;
    const markerData = {};

    return (
      <div className="App">
        <GoogleMap
          centerLat={centerLat}
          centerLong={centerLong}
          initZoom={initZoom}
          markerData={markerData}
          />
      </div>
    );
  }
}

export default App;

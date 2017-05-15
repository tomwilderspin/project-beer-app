import React, { Component } from 'react';
import { GOOGLE_MAPS_KEY } from '../Config/ClientKeys';

import GoogleMap from '../Map/GoogleMap/GoogleMapComponent';
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
          mapKey={GOOGLE_MAPS_KEY}
          />
      </div>
    );
  }
}

export default App;

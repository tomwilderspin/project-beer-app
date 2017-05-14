import React, { Component } from 'react';

import GoogleMap from '../Map/GoogleMap';
import './App.css';

class App extends Component {

  render() {

    const mapCenter = { lng: -90.1056957, lat: 29.9717272 };

    return (
      <div className="App">
        <GoogleMap initialCenter={mapCenter} />
      </div>
    );
  }
}

export default App;

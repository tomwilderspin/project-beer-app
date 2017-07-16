import React, { Component } from 'react';

import MapContainer from '../Map/MapContainer';
import ContentContainer from '../Content/ContentContainer';
import NavBar from '../Navigation/NavBarComponent';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <ContentContainer />
        <MapContainer />
      </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './App/Store';
import { GOOGLE_MAPS_KEY } from './Config/ClientKeys';
import App from './App/App';
import './index.css';

const initialState = {
    map: { 
      initLocation: { lat: 53.798179, long: -1.543627},
      initZoom: 12,
      hasKey: true,
      key: GOOGLE_MAPS_KEY,
      pins: {}
    }
}

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

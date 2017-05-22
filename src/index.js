import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './App/Store';

import App from './App/App';
import './index.css';

const initialState = {
    map: {
      initLocation: { lat: 53.798179, long: -1.543627},
      initZoom: 7,
      hasKey: true,
      key: process.env.REACT_APP_GMAP_KEY,
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

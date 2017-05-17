import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './App/Store';
import { GOOGLE_MAPS_KEY } from './Config/ClientKeys';
import App from './App/App';
import './index.css';

const initialState = {
    map: {
      initLocation: { lat: 29.9717272, long: -90.1056957},
      initZoom: 10,
      hasKey: true,
      key: GOOGLE_MAPS_KEY
    }
}

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

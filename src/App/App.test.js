import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './Store';
import App from './App';


const mockState = configureStore({
    map: {
      initLocation: { lat: 53.798179, long: -1.543627},
      initZoom: 7,
      hasKey: true,
      key: 12345,
      pins: {}
    }
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={mockState}>
    <App />
    </Provider>, div);
});

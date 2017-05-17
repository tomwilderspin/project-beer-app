
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './Reducer';
import MapPins from '../MapDataApi/MapPins';


export default function configureStore(initialState) {
  return createStore(
      Reducer,
      initialState,
      compose(
        applyMiddleware(thunk, MapPins)
      )
  );
}

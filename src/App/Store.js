
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './Reducer';
import MapPins from '../MapDataApi/MapPins';
import LocationInformation from '../Location/LocationInformation';


export default function configureStore(initialState) {

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose;

  return createStore(
    Reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        MapPins,
        LocationInformation
      )
    )
  );

}

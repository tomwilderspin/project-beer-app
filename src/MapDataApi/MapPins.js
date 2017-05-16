
import IsoFetch from 'isomorphic-fetch';

import { FETCH_MAP_PINS, RECEIVED_MAP_PINS } from '../Map/Actions';
import { MAP_PINS_ENDPOINT } from '../Config/DataEndpoints';


export default store => next => action => {

  if(action.type === FETCH_MAP_PINS) {

    IsoFetch(MAP_PINS_ENDPOINT)
      .then(response => {
        const pinData = response.json();

        next({type: RECEIVED_MAP_PINS, pins: pinData});
      });

  }

  return next(action);

}

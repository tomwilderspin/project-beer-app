
import IsoFetch from 'isomorphic-fetch';

import { FETCH_MAP_PINS, RECEIVED_MAP_PINS } from '../Map/Actions';
import { MAP_PINS_ENDPOINT } from '../Config/Environment';


export default store => next => action => {

  if(action.type === FETCH_MAP_PINS) {

    IsoFetch(MAP_PINS_ENDPOINT)
      .then(response => {

        response.json()
          .then(content => {

            next({type: RECEIVED_MAP_PINS, pins: content.message});
          });

      })
      .catch(e => {
        return next({type: RECEIVED_MAP_PINS, pins: {pins:[]}});
      });

  }

  return next(action);

}

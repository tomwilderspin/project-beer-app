
import IsoFetch from 'isomorphic-fetch';

import { FETCH_MAP_PINS, RECEIVED_MAP_PINS } from '../Map/Actions';
import { MAP_PINS_ENDPOINT } from '../Config/DataEndpoints';

const testPinData = { pins:[
  {latitude: 53.801198, longitude: -1.557102, title: 'location 1'},
  {latitude: 53.799647, longitude: -1.556587, title: 'location 2'}
]};


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
        return next({type: RECEIVED_MAP_PINS, pins: testPinData});
      });

  }

  return next(action);

}

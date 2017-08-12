import IsoFetch from 'isomorphic-fetch';

import {
  FETCH_CONTENT_DATA,
  FETCH_CONTENT_DATA_ERROR,
  RECEIVED_CONTENT_DATA
} from '../../Content/Actions';

export default store => next => action => {

    if(action.type === FETCH_CONTENT_DATA) {
      //todo get data from remote store 
    }

}

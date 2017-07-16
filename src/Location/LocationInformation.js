//handles location info display

import { MAP_PIN_CLICK } from '../Map/Actions';
import { openContent } from '../Content/Actions';

export default store => next => action => {

  //open content on a map pin click
  const state = store.getState();
  if (action.type === MAP_PIN_CLICK && !state.content.show) {
    return next(openContent(action.id));
  }

  return next(action);

}

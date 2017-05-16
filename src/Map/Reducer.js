
import { RECEIVED_MAP_PINS } from './Actions';

export default function map(state = {}, action) {
  switch(action.type) {
    case RECEIVED_MAP_PINS:
      return Object.assign(state, {pins: action.pins});
    default: return state;
  }
}

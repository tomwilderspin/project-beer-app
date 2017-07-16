
import { CONTENT_CONTAINER_CLOSED, OPEN_CONTENT } from './Actions';

export default function content(state = {}, action) {

  switch(action.type) {
    case CONTENT_CONTAINER_CLOSED:
      return {...state, show: false};
    case OPEN_CONTENT:
      return {...state, show: true};
    default: return state;
  }
}


import { combineReducers } from 'redux'
import  map from '../Map/Reducer';
import  content from '../Content/Reducer';

const Reducer = combineReducers({
  map,
  content
})

export default Reducer;

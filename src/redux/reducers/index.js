import { combineReducers } from 'redux';
import coursereducer from './coursereducer';

export default combineReducers({
  courses: coursereducer,
});

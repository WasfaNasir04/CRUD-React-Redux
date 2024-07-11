import { combineReducers } from 'redux';
import courseReducer from './coursereducer';
import userReducer from './userreducer';

export default combineReducers({
  course: courseReducer,
  user: userReducer
});

// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import courseReducer from './coursereducer';

export default combineReducers({
  courses: courseReducer,
  // Add other reducers here if needed
});

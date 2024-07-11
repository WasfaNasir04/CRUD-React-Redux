// src/redux/store.js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';  // Correct import
import rootReducer from './reducers';

// Enhancers and middleware setup
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import RoleBasedAccess from './components/rolebasedaccess';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <RoleBasedAccess />
    </div>
  </Provider>
);

export default App;

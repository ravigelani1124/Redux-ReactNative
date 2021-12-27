import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigator';
import Store from './src/redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;

import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'mobx-react';
import store from './App/store';

import Main from './App/index.js';

export default function App() {
  return (
    <Provider Store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
}

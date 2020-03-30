import React from 'react';
import {StyleSheet, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';

import Main from './App/index.js';

export default function App() {
  return (
    // <NavigationContainer>
    <View style={styles.container}>
      <Main />
    </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'mobx-react';
import store from './store';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

export default function Main() {
  return (
    <Provider Store={store}>
      <View class={styles.container}>
        <Header />
        <Content />
        <Footer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '98%',
    height: '99%',
    backgroundColor: '#bdbdbd',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {inject, observer} from 'mobx-react';

function Content(props) {
  // const {pageMessage} = props.Store;
  return (
    <View style={styles.container}>
      <Text>Content!!!!!!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});

export default inject('Store')(observer(Content));

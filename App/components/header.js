import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>Header!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

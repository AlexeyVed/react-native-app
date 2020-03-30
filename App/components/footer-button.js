import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { inject, observer } from "mobx-react";

function Button ({ name, Store, navigation }) {
  const { updatePage } = Store;
  const clickButton = () => {
    updatePage(name)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={clickButton} style={styles.button}>
        <Text>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  height: '100%',
  width: '24%',
  backgroundColor: '#7e7e7e',
  alignItems: 'center',
  justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }
})

export default inject("Store")(observer(Button));
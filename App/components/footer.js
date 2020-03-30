import React from 'react';
import {StyleSheet, View} from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FooterButton from './footer-button';

// const Tab = createBottomTabNavigator()

// export default function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={FooterButton} />
//       <Tab.Screen name="Settings" component={FooterButton} />
//     </Tab.Navigator>
//   );
// }

export default function Footer() {
  return (
    <View style={styles.container}>
      <FooterButton name="Schedule" />
      <FooterButton name="Habbits" />
      <FooterButton name="Calendar" />
      <FooterButton name="Settings" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: '#a8a8a8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

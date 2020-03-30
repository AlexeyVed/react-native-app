import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'black',
        activeBackgroundColor: 'green',
        inactiveBackgroundColor: 'yellow',
        showIcon: 'false',
        labelPosition: 'below-icon',
        style: styles.bottomTab,
        tabStyle: styles.singleTab,
      }}>
      <Tab.Screen name="Tasks" component={Content} />
      <Tab.Screen name="Calendar" component={Header} />
      <Tab.Screen name="Habbits" component={Header} />
      <Tab.Screen name="Settings" component={Header} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomTab: {
    borderTopWidth: 5,
    borderTopColor: 'black',
  },
  singleTab: {
    // backgroundColor: '#bdbdbd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

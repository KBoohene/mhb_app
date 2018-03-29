import React, { Component } from 'react';
import HomeScreen from './Home';
import HymnScreen from './Hymn'
import { StackNavigator } from 'react-navigation';

const Routes= StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Hymns: {
      screen: HymnScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
export default Routes;
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Routes from './src/spa/Routes'

export default class App extends Component{
  render() {
    return (
        <Routes/>
    );
  }
}


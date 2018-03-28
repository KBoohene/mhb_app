import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Home extends Component{
  static navigationOptions = { header: null }
  
  render(){
    return(
      <View>
        <Text>Home Page </Text>
      </View>
      )
  }
}

export default Home;
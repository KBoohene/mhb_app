import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Hymn extends Component{

  static navigationOptions = { header: null }
  render(){
    return(
      <View>
        <Text>Hymn Page</Text>
      </View>
      )
  }
}

export default Hymn
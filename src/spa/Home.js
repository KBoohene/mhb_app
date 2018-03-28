import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button
} from 'react-native';
import db from '../api/db_functions'

class Home extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      lyrics: ''
    };

  }
  static navigationOptions = { header: null }
  findHymn = () =>{
    // db.getHymn()
  }

  render(){
    return(
      <View>
        <Button
        onPress={this.findHymn}
        title= "Home Page"
        />
        <Text>{this.state.lyrics}</Text>
      </View>
      )
  }
}

export default Home;
import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button
} from 'react-native';

var SQLite = require('react-native-sqlite-storage');
let db = SQLite.openDatabase({name: 'my.db'})

class Home extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      lyrics: ''

    };

    db.transaction(function (txn) {
      txn.executeSql('SELECT * FROM `users`', [], function (tx, res) {
        for (let i = 0; i < res.rows.length; ++i) {
          console.log('item:', res.rows.item(i));
        }
      });
    });

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
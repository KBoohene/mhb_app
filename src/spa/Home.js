import React, { Component } from 'react';
import { Text, View} from 'react-native';
import Button from 'antd-mobile/lib/button';
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
    db.getHymn(1,(hymnText)=>{
      this.setState({lyrics:hymnText})
    })
  }

  render(){
    return(
      <View>
        <Button onClick={this.findHymn}>Search</Button>
        <Text>{this.state.lyrics}</Text>
      </View>
      )
  }
}


export default Home;
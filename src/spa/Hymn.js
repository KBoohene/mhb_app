import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import SearchBar from 'antd-mobile/lib/search-bar';
import db from '../api/db_functions'

class Hymn extends Component{
  constructor(props) {
    super(props);
    this.state = {
      num: '',
      lyrics:''
    };  

  }

  static navigationOptions = { header: null }

  componentWillMount(){
    let { params } = this.props.navigation.state;
    let hymn_Number = params ? params.hymnNumber : null;
    let hymn_lyrics = params ? params.hymnText : null;
    this.setState({lyrics:hymn_lyrics})
  }
  
  findHymn = () =>{
    db.getHymn(this.state.num,(hymnText)=>{
      this.setState({lyrics:hymnText})
      
      this.props.navigation.navigate('Hymns', {
        hymnNumber: this.state.num,
        hymnText: this.state.lyrics,
      });
    })
  }

  onChange= (value) => {
    this.setState({ num: value });
  };

  render(){
    return(
      <View>
        <View>
          <SearchBar 
            onChange={this.onChange}
            placeholder="Search" 
            cancelText="Cancel"
            onSubmit={this.findHymn} />
        </View>
        <ScrollView>
          <Text>
            {this.state.lyrics}
          </Text>
        </ScrollView>
      </View>
      )
  }
}

export default Hymn
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import SearchBar from 'react-native-search-box'
import db from '../api/db_functions'

class Hymn extends Component{
  constructor(props) {
    super(props);
    this.state = {
      num: '',
      lyrics:'',
      place:'Hymn'
    };  

  }

  static navigationOptions = { header: null }

  componentWillMount(){
    let { params } = this.props.navigation.state;
    let hymn_Number = params ? params.hymnNumber : null;
    let hymn_lyrics = params ? params.hymnText : null;
    this.setState({lyrics:hymn_lyrics})
    this.setState({place:hymn_Number})
  }
  
  findHymn = () =>{
    db.getHymn(this.state.num,(hymnText)=>{
      this.setState({lyrics:hymnText})
      
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
            onChangeText={this.onChange}
            placeholder={this.state.place} 
            blurSubmit={true}
            onSearch={this.findHymn} />
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
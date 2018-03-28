import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import SearchBar from 'antd-mobile/lib/search-bar';

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

  render(){
    return(
      <View>
        <View>
          <SearchBar placeholder="Search" maxLength={8} />
        </View>
        <ScrollView>
        </ScrollView>
      </View>
      )
  }
}

export default Hymn
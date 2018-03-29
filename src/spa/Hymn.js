import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView
} from 'react-native';
import SearchBar from 'react-native-search-box'
import Card from 'antd-mobile/lib/card'
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
    // let { params } = this.props.navigation.state;
    // let hymn_Number = params ? params.hymnNumber : null;
    // let hymn_lyrics = params ? params.hymnText : null;
    // this.setState({lyrics:hymn_lyrics})
  }
  
  findHymn = () =>{
    db.getHymn(this.state.num,(hymnText)=>{
      this.setState({lyrics:hymnText})
      
    })
  }

  onChange= (value) => {
    this.setState({ num: value });
  };

  onDelete=()=>{
    this.setState({ place: 'Hymn' });
  };

  onCancel = () =>{
    this.setState({place: 'Hymn'})
  }

  render(){
    return(
      <View>
        <StatusBar hidden={true}/>
        <View>
          <SearchBar 
            onChangeText={this.onChange}
            placeholder={this.state.place} 
            blurSubmit={true}
            backgroundColor = {"#303337"}
            onSearch={this.findHymn} />
        </View>
        <ScrollView>
          <Card>
            <Card.Header 
            title={"Hymn Number: "+this.state.num }
            />
            <Card.Body>
              <Text>
                {this.state.lyrics}
              </Text>  
            </Card.Body>
          </Card>
          
        </ScrollView>
      </View>
      )
  }
}

export default Hymn
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
  
  //Hides screen navigation bar
  static navigationOptions = { header: null }
  
  /*
  * Performed before a component is mounted 
  * or page is loaded
  */
  componentWillMount(){
    // Retrieves values passed previous route
    let { params } = this.props.navigation.state;
    let hymn_Number = params ? params.hymnNumber : null;
    let hymn_lyrics = params ? params.hymnText : null;

    // Values are assigned to state variables
    this.setState({num:hymn_Number})
    this.setState({lyrics:hymn_lyrics})

  }
  
  //Calls the db function that searches for a hymn
  findHymn = () =>{
    db.getHymn(this.state.num,(hymnText)=>{
      this.setState({lyrics:hymnText})
      console.log(this.state.lyrics)
    })
  }

  //Stores the change in text in the search bar
  onChange= (value) => {
    this.setState({ num: value });
  };

  //Callback function after the search bar is closed
  onDelete=()=>{
    this.setState({ place: 'Hymn' });
  };

  //Callback function after the search bar is cleared
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
        <ScrollView 
          contentContainerStyle={styles.scroll_container}>
          <Card>
            <Card.Header 
            title={"Hymn Number: "+this.state.num }
            />
            <Card.Body>
              <Text style={styles.hym_text}>
                {this.state.lyrics}
              </Text>  
            </Card.Body>
          </Card>
          
        </ScrollView>
      </View>
      )
  }
}
//Styling for the different components
const styles = StyleSheet.create({
  hym_text:{
   fontSize:18
  },
  scroll_container:{
    flex:1
  }
});

export default Hymn
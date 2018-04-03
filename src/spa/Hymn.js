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
      place:'Hymn',
      foundHymn:''
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
    this.setState({foundHymn:hymn_Number})
    this.setState({lyrics:hymn_lyrics})

  }
  
  //Calls the db function that searches for a hymn
  findHymn = () =>{
    db.getHymn(this.state.num,(hymnText)=>{
      this.setState({lyrics:hymnText})
      this.setState({foundHymn:this.state.num})
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
          <Card 
            style={styles.card_style}
            full={true}
            >
            <Card.Header 
            title={"Hymn Number: "+this.state.foundHymn }
            style={{borderColor:"#303337"}}
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
   fontSize:18,
   backgroundColor:'#303337',
   color:"white"
  },
  scroll_container:{
    flex:0,
  },
  card_style:{
    backgroundColor:'#303337',
    borderColor:'#303337',
  }

});

export default Hymn
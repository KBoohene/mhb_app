import React, { Component } from 'react';
import { Text, View, StatusBar, StyleSheet} from 'react-native';
import Button from 'antd-mobile/lib/button';
import SearchBar from 'react-native-search-box'
import db from '../api/db_functions'

class Home extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      num: '',
      lyrics:''
    };  

  }

  //Hides navigation header
  static navigationOptions = { header: null }

  //Calls the db function that searches for a hymn
  findHymn = () =>{
    /**
     * Calls database api to search for a hymn
     * 
     * @param {integer} this.state.num 
     * @param {function} hymnText
     */
    db.getHymn(this.state.num,(hymnText)=>{
      this.setState({lyrics:hymnText})
      
      /** 
       * Passing of variables and navigation 
       * to the Hymns page.
      */
      this.props.navigation.navigate('Hymns', {
        hymnNumber: this.state.num,
        hymnText: this.state.lyrics,
      });
    })
  }

  //Stores the change in text in the search bar
  onChange= (value) => {
    this.setState({ num: value });
  };


  render(){
    return(
      <View style={styles.screen}>
        <StatusBar hidden={true}/>
        <View></View>
        <View>
          <SearchBar 
            onChangeText={this.onChange}
            placeholder="Hymn"
            backgroundColor = {"#303337"} 
            onSearch={this.findHymn}
            />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            style={styles.buttonStyle}
            onClick={this.findHymn}
          >
            Search
          </Button>
        </View>     
      </View>
      )
  }
}

//Styling for the different components
const styles = StyleSheet.create({
  buttonContainer:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    borderRadius:15,
    height:35,
    borderColor:'#303337',
    width:200,
    backgroundColor:'#303337'
  },
  screen: {
    backgroundColor:"#363B3F",
    flex:1
  }
});


export default Home;
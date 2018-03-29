import React, { Component } from 'react';
import { Text, View} from 'react-native';
import Button from 'antd-mobile/lib/button';
import SearchBar from 'antd-mobile/lib/search-bar'
import db from '../api/db_functions'

class Home extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      num: '',
      lyrics:''
    };  

  }
  static navigationOptions = { header: null }
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

  onCancel = () => {
    this.setState({ num: '' });
    
  };

  render(){
    return(
      <View>
        <View></View>
        <View>
          <SearchBar 
            onChange={this.onChange}
            placeholder="Search"
            
            cancelText="Cancel" />
          <Button onClick={this.findHymn}>Search</Button>
        </View>     
        <Text>{this.state.num}</Text>
      </View>
      )
  }
}


export default Home;
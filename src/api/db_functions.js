import {Platform} from 'react-native';
var SQLite = require('react-native-sqlite-storage');
let db = ""
if(Platform.OS ==="ios"){
  db = SQLite.openDatabase({name : "mhb.db", createFromLocation :'../../www/mhb.db'});
}
else{
  db = SQLite.openDatabase({name: 'my.db', createFromLocation:'~mhb.db'})
}


const functions = {
  /**
   * Searches sqlite database for lyrics of a hymn
   * 
   * @param {integer} number 
   * @param {function} retrieve 
   */
  getHymn(number, retrieve){
    db.transaction(function (txn) {
      txn.executeSql('SELECT * FROM `hymns` where `hymn_Num` =?', [number], function (tx, res) {
        retrieve(res.rows.item(0)['lyrics'])
      });
    });
  }

  
}

export default functions
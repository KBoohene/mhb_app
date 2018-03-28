var SQLite = require('react-native-sqlite-storage');
let db = SQLite.openDatabase({name: 'my.db', createFromLocation:'~mhb.db'})

const functions = {
  getHymn(number, retrieve){
    db.transaction(function (txn) {
      txn.executeSql('SELECT * FROM `hymns` where `hymn_Num` =?', [number], function (tx, res) {
        retrieve(res.rows.item(0)['lyrics'])
      });
    });
  }

  
}

export default functions
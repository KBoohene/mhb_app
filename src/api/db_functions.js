var SQLite = require('react-native-sqlite-storage');
let db = SQLite.openDatabase({name: 'my.db', createFromLocation:'~mhb.db'})

const functions = {
  getHymn(){
    db.transaction(function (txn) {
      txn.executeSql('SELECT * FROM `hymns`', [], function (tx, res) {
        console.log(res)
      });
    });
  }

  
}

export default functions
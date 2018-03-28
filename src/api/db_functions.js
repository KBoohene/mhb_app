const SQLite = require('react-native-sqlite-storage')
const db = SQLite.openDatabase({name : "mhb_db", createFromLocation : "~/data/mhb.db"});

const functions = {
  getHymn(){
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM hymns', [], (tx, results) => {
          // Get rows with Web SQL Database spec compliance.
          console.log(results)
        });
    });
  }
}

export default functions
const SQLite = require('react-native-sqlite-storage')

const db = SQLite.openDatabase({name : "mhb_db", createFromLocation : "~/mhb.db"});


const functions = {
  getHymn(){
    db.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS category  (ID Integer PRIMARY KEY AUTOINCREMENT,NAME varchar(25))', [], (tx, results) => {
          console.log(results)
          
        });
    });
  }

  
}

export default functions
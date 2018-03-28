

const db = SQLite.openDatabase('mhb.db', '1.0', '', 1);


const functions = {
  getHymn(){
    db.transaction(function (txn) {
      txn.executeSql('SELECT * FROM `hymns`', [], function (tx, res) {
        for (let i = 0; i < res.rows.length; ++i) {
          console.log('item:', res.rows.item(i));
        }
      });
    });
  }

  
}

export default functions
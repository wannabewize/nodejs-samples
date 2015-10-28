var mysql = require('mysql');
var dbConfig = {
	host : 'localhost',
	user : 'root',
	password : '',
	port : 3306,
	database : 'test',
   multipleStatements : true
};

console.log('Insert 300 test data');

var conn = mysql.createConnection(dbConfig);

conn.connect(function(connectError) {
   if ( connectError ) {
      console.error('Error', connectError);
      return;
   }   
   var sql = 'CREATE TABLE IF NOT EXISTS items ( title VARCHAR(10) );'
   
   for(var i = 0 ; i < 300 ; i++) {
      sql+= 'INSERT INTO items VALUE ("item' + i + '");';
   }
   
   conn.query(sql, function(queryError, result) {
      if ( queryError ) {
         console.error('SQL Query Error', queryError);
         return;
      }               
      conn.end();
   });   
});

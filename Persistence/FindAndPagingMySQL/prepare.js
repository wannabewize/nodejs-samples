const conn = require('./dbConnection.js');

conn.connect(function(connectError) {
   if ( connectError ) {
      console.error('Error', connectError);
      return;
   }   
   var sql = 'CREATE TABLE IF NOT EXISTS items ( title VARCHAR(10) );'
   
   for(var i = 0 ; i < 300 ; i++) {
      sql+= 'INSERT INTO items VALUE ("item-' + i + '");';
   }
   
   conn.query(sql, function(queryError, result) {
      if ( queryError ) {
         console.error('SQL Query Error', queryError);
         return;
      }          
      console.log('Insert 300 sample data.')     
      conn.end();
   });   
});

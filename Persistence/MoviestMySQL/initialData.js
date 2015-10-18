var mysql = require('mysql');
var dbConfig = {
	host : 'localhost',
	user : 'root',
	password : '',
	port : 3307,
	database : 'Moviest',
   multipleStatements : true	
};

var conn = mysql.createConnection(dbConfig);

var fs = require('fs');

conn.connect(function(connectError) {
   if ( connectError ) {
      console.error('Error', connectError);
      return;
   }
   
   fs.readFile('./initialData.sql', 'utf-8', function(fileReadErr, sqls) {
      if ( fileReadErr ) {
         console.error('File Read Error', fileReadErr);
         return;
      }
      conn.query(sqls, function(queryError, result) {
         if ( queryError ) {
            console.error('SQL Query Error', queryError);
            return;
         }               
         conn.end();
      });   
   });   
});

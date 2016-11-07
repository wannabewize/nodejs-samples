var mysql = require('mysql');
var dbConfig = {
	host : 'localhost',
	user : 'root',
	password : '',
	port : 3306,
	database : 'mysql_example',
   multipleStatements : true
};

var conn = mysql.createConnection(dbConfig);

module.exports = conn;
var mysql = require('mysql');
var dbConfig = {
	host : 'localhost',
	user : 'root',
	password : '',
	port : 3306,
	database : 'moviest'	
};
var dbPool = mysql.createPool(dbConfig);

module.exports = dbPool;
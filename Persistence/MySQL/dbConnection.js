var mysql = require('mysql');

var dbConfig = {
   host: 'localhost',
   user: 'root',
   password: '',
   port: 3306,
   database: 'Moviest'
};

var pool = mysql.createPool(dbConfig);

module.exports = pool;
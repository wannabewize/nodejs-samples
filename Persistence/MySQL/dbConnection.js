var mysql = require('mysql');

var dbConfig = {
   host: 'localhost',
   user: 'root',
   password: '',
   port: 3307,
   database: 'Moviest'
};

var pool = mysql.createPool(dbConfig);

module.exports = pool;
var mysql = require('mysql');

var dbConfig = {
   host: 'localhost',
   user: 'root',
   password: '',
   port: 3306,
   multiplestatements : true,
   database: 'mysql_example'
};

var pool = mysql.createPool(dbConfig);

module.exports = pool;
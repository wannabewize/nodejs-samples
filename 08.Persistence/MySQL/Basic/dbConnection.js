const mysql = require('mysql');

const dbConfig = {
   host: 'localhost',
   user: 'root',
   password: '',
   port: 3306,
   multiplestatements : true,
   database: 'example'
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;
const mysql = require('mysql2');

const dbConfig = {
   host: 'localhost',
   user: 'dev',
   password: '',
   port: 3306,
   database: 'example',
   connectionLimit: 5,
   waitForConnections: true
};

const pool = mysql.createPool(dbConfig);
module.exports = pool;
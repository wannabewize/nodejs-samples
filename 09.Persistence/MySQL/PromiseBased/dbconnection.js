const mysql = require('promise-mysql');

const config = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "port": 3306,
    "database": "example"
 };

const pool = mysql.createPool(config);
module.exports = pool;
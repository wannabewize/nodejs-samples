const mysql = require('promise-mysql');
const fs = require('fs');
const config = fs.readFileSync('./dbConfig.json');
const dbConfig = JSON.parse(config);

const pool = mysql.createPool(dbConfig);
module.exports = pool;
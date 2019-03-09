/**
 * 커넥션 모듈
 */
const mysql = require('mysql');
const fs = require('fs');
const config = fs.readFileSync('./dbConfig.json');
const dbConfig = JSON.parse(config);

const pool = mysql.createPool(dbConfig);

module.exports = pool;
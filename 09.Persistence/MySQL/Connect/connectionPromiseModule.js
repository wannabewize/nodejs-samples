const mysql = require('promise-mysql');
const fs = require('fs');
const config = fs.readFileSync('./dbConfig.json');
const dbConfig = JSON.parse(config);

// 커넥션 얻기
// mysql.createConnection(dbConfig)
// .then( (conn) => {
//    console.log('커넥션 얻기 성공');
//    conn.end();
// })
// .catch(err => {
//    console.log('커넥션 얻기 실패', err);   
// });

const pool = mysql.createPool(dbConfig);
module.exports = pool;
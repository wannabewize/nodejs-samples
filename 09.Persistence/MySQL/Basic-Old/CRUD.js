const mysql = require('mysql');
const dbConfig = {
   host: 'localhost',
   user: 'root',
   password: '',
   port: 3306,
   database: 'example',
   multipleStatements : true // drop, create 쿼리를 모두 실행하기 위한 옵션
};

var conn = mysql.createConnection(dbConfig);

console.log('Database CRUD Basic');
// prepareTable();
tryInsert1();
// tryInsert2();
// tryUpdate1();
// tryUpdate2();
// tryDelete();

function prepareTable() {
   const sql = 'drop table if exists movies; create table movies (movie_id int primary key auto_increment, title varchar(50), director varchar(50), year int);';
   conn.query(sql, (err, result) => {
      if ( err ) {
         console.error('Error : ', err);
         return;
      }
      console.log('Table prepration completed!');
      conn.end();
   });
}

// INSERT - VALUES
function tryInsert1() {
   const sql = 'INSERT INTO movies (title, director, year) VALUES (?, ?, ?);';
   const params = ["스타워즈", "조지 루카스", 0];
   conn.query(sql, params, function(err, results) {
      if ( err ) {
         console.error('Error : ', err);
         return;
      }
      // 새로 추가한 항목의 InsertID
      const insertId = results.insertId;
      console.log('INSERT 성공 ', insertId);
      conn.end();      
   });
}

// INSERT - SET
function tryInsert2() {
   const params = { title : '아바타', director : '제임스 카메론', year:2012 };
   const sql = 'INSERT INTO movies SET ?;';
   conn.query(sql, params, function(err, results) {
      if ( err ) {
         console.error('Error : ', err);
         return;
      }
      // 새로 추가한 항목의 InsertID
      var insertId = results.insertId;
      console.log('INSERT 성공 ', insertId);
      conn.end();
   });
}

function tryUpdate1() {
   const sql = 'UPDATE movies SET year = ? WHERE title = ?';
   const params = [1977, '스타워즈'];

   conn.query(sql, params, function(err, result) {
      if ( err ) {
         console.error('Error : ', err);
         return;
      }
      console.log('UPDATE 성공 ', result);
      conn.end();
   });
}

// UPDATA - SET
function tryUpdate2() {
   const params = { title:'Avata', director:'James Cameron' };
   const sql = 'UPDATE movies SET ? WHERE title = ?';

   conn.query(sql, [params, '아바타'], function(err, result) {
      if ( err ) {
         console.error('Error : ', err);
         return;
      }
      console.log('UPDATE 성공 ', result);
      conn.end();
   });
}

function tryDelete() {
   const year = 2000;
   const sql = 'DELETE FROM movies WHERE year <= ?';
   
   conn.query(sql, year, function(err, result) {
      if ( err ) {
         console.error('Error : ', err);
         return;
      }
      console.log('DELETE 성공 ', result);
      conn.end();
   });   
}
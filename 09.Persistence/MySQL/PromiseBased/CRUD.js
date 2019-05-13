// Promsie 기반의 풀 로딩
const pool = require('./dbconnection');

// prepareTable();
// tryInsert1();
// tryInsert2();
showMovies();

function tryInsert1() {
   const sql = 'INSERT INTO movies (title, director, year) VALUES (?, ?, ?);';
   const params = ["스타워즈", "조지 루카스", 1977];

   pool.getConnection().then( conn => {
      const result = conn.query(sql, params);
      conn.release();
      return result;
   }).then( rows => {
      const insertId = rows.insertId;
      // 새로 추가된 Row의 autoincresed id
      console.log('Insert Success : ', rows);
   }).catch(err => {
      console.log('Insert Error :', err);
   });
}

async function tryInsert2() {
   const sql = 'INSERT INTO movies (title, director, year) VALUES (?, ?, ?);';
   const params = ["어벤저스: 엔드게임", "루소 형제", 2019];

   try {
      const conn = await pool.getConnection()
      const rows = await conn.query(sql, params);
      const insertId = rows.insertId;
      // 새로 추가된 Row의 autoincresed id
      console.log('Insert Success : ', rows);
   }
   catch ( err ) {
      console.log('Insert Error :', err);
   }
}

function prepareTable() {
   let connection;
   pool.getConnection().then( conn => {      
      const sql = 'drop table if exists movies;';

      // release를 위함
      connection = conn;
      // 프라미스 반환 함수로 return
      return conn.query(sql)
   }).then( result => {
      const sql = 'create table movies (movie_id int primary key auto_increment, title varchar(50), director varchar(50), year int);';
      return connection.query(sql);
   }).then( row => {      
      console.log('drop, create 성공');
      connection.release();
   }).catch( err => {
      console.log('drop, create 실패:', err);
      if ( connection ) {
         connection.release();
      }
   });
}

function showMovies() {
   pool.getConnection().then( conn => {      
      const sql = 'select * from movies;';

      conn.query(sql).then(rows => {
         console.log('movie list \n', rows)
         conn.release();
      }).catch( err => {
         console.log('영화 목록 얻기 에러:', err);
         conn.release();
      });
   });
}
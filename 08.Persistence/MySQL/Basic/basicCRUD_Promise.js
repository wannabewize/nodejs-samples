// Promsie 기반의 풀 로딩
const pool = require('./dbConnectionPromise');


// tryInsert1();
tryInsert2();

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
   const params = ["스타워즈", "조지 루카스", 1977];

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
   pool.getConnection().then( conn => {      
      const sql = 'drop table if exists movies;';

      conn.query(sql).then(row => {
         return conn.query(sql2)
      }).then(row => {}).catch( err => {

      });


      return conn.query(sql)


   }).then( conn => {
      const sql = 'create table movies (movie_id int primary key auto_increment, title varchar(50), director varchar(50), year int);';
      return conn.query(sql);      
   }).then( row => {
      
   }).catch( err => {

   });
   
   
   
   conn.query(sql, (err, result) => {
      if ( err ) {
         console.error('Error : ', err);
         return;
      }
      console.log('Table prepration completed!');
      conn.end();
   });
}
/**
 * SELECT를 이용해서 데이터 얻어오기
 */
const pool = require('./dbConnection');

pool.getConnection((err, conn) => {
   if ( err ) {
      console.error('Error', err);
      return;
   }
   
   var sql = 'SELECT * FROM movies';
   conn.query(sql, (err, results) => {
      if ( err ) {
         console.error('Error', err);
         return;
      }
      
      for ( var movie of results ) {
         console.log('제목 : ' + movie.title + ' 감독 : ' + movie.director);
      }
      
      conn.release();    
      pool.end();  
   });
});
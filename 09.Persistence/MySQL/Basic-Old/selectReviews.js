const pool = require('./dbConnection');

pool.getConnection( (err, conn) => {
   if ( err ) {
      console.error('Error', err);
      return;
   }
   // 임의의 1개 로우 선택
   var sql = 'SELECT movie_id FROM movies ORDER BY RAND() LIMIT 1;'
   conn.query(sql, (err, result) => {
      if ( err ) {
         console.error('Error', err);
         return;
      }
      
      var movieId = result[0].movie_id;
      
      var sql = 'SELECT movies.title, reviews.review FROM movies, reviews WHERE movies.movie_id = reviews.movie_id';
      conn.query(sql, (err, results) => {
         if ( err ) {
            console.error('Error', err);
            return;
         }
         
         if ( results.length > 0 ) {
            var first = results[0];
            console.log('제목 : ' + first.title);
            results.forEach((item, index) => {
               console.log(index + ' : ' + item.review);
            });            
         }
         conn.release();      
         pool.end();
      });      
   });
});
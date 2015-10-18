var pool = require('./dbConnection');

pool.getConnection(function(err, conn) {
   if ( err ) {
      console.error('Error', err);
      return;
   }
   // 임의의 1개 로우 선택
   var sql = 'SELECT movie_id FROM movie ORDER BY RAND() LIMIT 1;'
   conn.query(sql, function(err, result) {
      if ( err ) {
         console.error('Error', err);
         return;
      }
      
      var movieId = result[0].movie_id;
      
      var sql = 'SELECT movie.title, review.review FROM movie, review WHERE movie.movie_id = review.movie_id';
      conn.query(sql, function(err, results) {
         if ( err ) {
            console.error('Error', err);
            return;
         }
         
         if ( results.length > 0 ) {
            var first = results[0];
            console.log('제목 : ' + first.title);
            results.forEach(function(item, index) {
               console.log(index + ' : ' + item.review);
            });            
         }
         conn.release();      
      });      
   });
});
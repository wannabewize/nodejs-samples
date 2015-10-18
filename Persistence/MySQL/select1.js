var pool = require('./dbConnection');

pool.getConnection(function(err, conn) {
   if ( err ) {
      console.error('Error', err);
      return;
   }
   
   var sql = 'SELECT * FROM movies';
   conn.query(sql, function(err, results) {
      if ( err ) {
         console.error('Error', err);
         return;
      }
      
      for ( var i = 0 ; i < results.length ; i++ ) {
         var movieInfo = results[i];
         console.log('제목 : ' + movieInfo.title + ' 감독 : ' + movieInfo.director);
      }
      
      conn.release();      
   });
});
var pool = require('./dbConnect');

class Movies {
}

Movies.getMovieList = function(cb) {
   pool.getConnection(function(err, conn) {
      if ( err ) {
         return cb(err);
      }
      var sql = 'SELECT movie_id, title FROM movies';
      conn.query(sql, function(err, results) {
         if ( err ) {
            return cb(err);
         }

         conn.release();
         return cb(null, { count : results.length, data : results });
      });
   });   
}
module.exports = Movies;    
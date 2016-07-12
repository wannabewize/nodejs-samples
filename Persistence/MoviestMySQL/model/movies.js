var pool = require('./dbConnect');

class Movies {
   
}

Movies.prototype.getMovieList = function(cb) {
   pool.getConnection(function(err, conn) {
      if ( err ) {
         return cb(err);
      }
      var sql = 'SELECT * FROM movies';
      conn.query(sql, function(err, results) {
         if ( err ) {
            return cb(err);
         }
         var movieList = '';
         results.forEach(function(item) {
            movieList += item.movie_id + ' ' + item.title + '\n';
         });
         
         conn.release();
         return cb(null, movieList);
      });
   });   
}

module.exports = Movies;
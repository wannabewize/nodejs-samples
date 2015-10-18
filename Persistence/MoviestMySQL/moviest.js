var pool = require('./dbConnect');

function Moviest() {
   
}

Moviest.prototype.getMovieList = function(cb) {
   pool.getConnection(function(err, conn) {
      if ( err ) {
         return cb(err);
      }
      var sql = 'SELECT * FROM movie';
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

module.exports = Moviest;
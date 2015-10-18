var async = require('async');
var pool = require('./dbConnection');

pool.getConnection(function(err, conn) {
   
   async.waterfall([
      function(callback) {
         var sql = 'INSERT INTO movie (title, director, year) VALUES ("스타워즈", "조지 루카스", 0);';
         conn.query(sql, function(err, results) {
            if ( err ) {
               return callback(err);
            }
            // 새로 추가한 항목의 InsertID
            var insertId = results.insertId;
            console.log('INSERT 성공 ', insertId);
            callback(null, insertId);
         });
      },
      function(movieId, callback) {
         var year = 1977;
         var sql = 'UPDATE movie SET year = ? WHERE movie_id = ?';

         conn.query(sql, [year, movieId], function(err, result) {
            if ( err ) {
               return callback(err);
            }
            console.log('UPDATE 성공 ', result);
            callback(null, year);
         });
      },
      function(year, callback) {
         var sql = 'DELETE FROM movie WHERE year <= ?';
         
         conn.query(sql, year, function(err, result) {
            if ( err ) {
               return callback(err);
            }
            console.log('DELETE 성공 ', result);
            callback(null);
         });
      }
   ], function(err){
      if ( err ) {
         console.error('Error', err);
      }
      else {
         console.log('INSERT, UPDATE, DELETE 성공');
      }
      
      // 연속된 query 이후에 connection relase 하기 쉽다.      
      conn.release();
   });
});
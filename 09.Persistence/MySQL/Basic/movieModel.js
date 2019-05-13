const mysql = require('mysql');

const dbConfig = {
   host: 'localhost',
   user: 'root',
   password: '',
   port: 3306,
   database: 'example',
   multipleStatements: true
};

const pool = mysql.createPool(dbConfig);

class MovieModel {
    getMovieList = (callback) => {
        pool.getConnection( (err, conn) => {
            if ( err ) {
               return callback(err);
            }
            var sql = 'SELECT * FROM movies';
            conn.query(sql, (err, results) => {
               if ( err ) {
                  return callback(err);
               }
      
               conn.release();
               return callback(null, results);
            });
         });   
    }
    
    insertMovie = (movie, callback) => {
        pool.getConnection( (err, conn) => {
            if ( err ) {
                return callback(err);
            }

            const sql = 'INSERT INTO movies SET ?';
            conn.query(sql, movie, (err, results) => {
               if ( err ) {
                  console.error('INSERT Error', err);
                  conn.release();
                  return callback(err, null);
               }

               callback(null, results);
            });
        });
    }

    initModel = (callback) => {
        pool.getConnection( (err, conn) => {   
            if ( err ) {
                return callback(err);
            }

            const sql = 'drop table if exists movies; create table movies ( movie_id int primary key auto_increment, title varchar(50), director varchar(50), year int);';

            conn.query(sql, (err, result) => {
                if ( err ) {
                    conn.release();
                    return callback(err)
                }
                console.log('Table prepration completed!');
                conn.release();
                callback(null);
            });
        });
    }
}

module.exports = new MovieModel();
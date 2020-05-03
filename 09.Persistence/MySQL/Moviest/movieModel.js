const mysql = require('mysql2');

const dbConfig = {
   host: 'localhost',
   user: 'dev',
   password: 'secret',
   port: 3306,
   database: 'example',
   multipleStatements: true
};

const pool = mysql.createPool(dbConfig);

class MovieModel {
    getMovieList(callback) {
        var sql = 'SELECT * FROM movies';
        pool.query(sql, (err, results) => {
            return callback(null, results);
        });   
    }
    

    // Prise 기반의 영화 추가
    insertMovie(movie) {
        return new Promise( (resolve, reject) => {
            const sql = 'INSERT INTO movies SET ?';
            pool.promise().query(sql, movie).then(results => {
                
                // 추가 행위의 결과는 - 새로 추가된 데이터
                let result = movie;
                result.movie_id = results[0]['insertId'];
                resolve(result);
                
            }).catch(error => {
                console.error('Error :', error);
                reject(error);
            });
        });
    }

    initModel(callback) {
        const sql = 'drop table if exists movies; create table movies ( movie_id int primary key auto_increment, title varchar(50), director varchar(50), year int);';
        pool.query(sql, (err, result) => {
            if ( err ) {
                return callback(err)
            }
            console.log('Table prepration completed!');
            callback(null);
        });
    }
}

module.exports = new MovieModel();
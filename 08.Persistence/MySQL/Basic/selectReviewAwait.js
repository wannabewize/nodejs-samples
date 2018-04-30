const pool = require('./dbConnectionPromise');

async function doIt() {
    try {
        const conn = await pool.getConnection();

        var sql = 'SELECT movie_id FROM movies ORDER BY RAND() LIMIT 1;'
        const result = await conn.query(sql);

        var movieId = result[0].movie_id;
        var sql2 = 'SELECT movies.title, reviews.review FROM movies, reviews WHERE movies.movie_id = reviews.movie_id';

        const result2 = await conn.query(sql2);
        if ( result2.length > 0 ) {
            var first = result2[0];
            console.log('제목 : ' + first.title);
            result2.forEach((item, index) => {
               console.log(index + ' : ' + item.review);
            });            
         }
         conn.release();      
         pool.end();

    } catch (error) {
        console.log('Error :', error);        
    }
}

doIt();
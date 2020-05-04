const pool = require('./dbConnection');

class MovieModel {}

MovieModel.getMovieList = async () => {
    const sql = 'SELECT * FROM movies';

    let conn;
    try {
        conn = await pool.getConnection();
        const [rows, metadata] = await conn.query(sql);
        conn.release();
        return rows;
    } catch (error) {
        console.error(error);
    } finally {
        if ( conn ) conn.release();
    }
}    

MovieModel.insertMovie = async (title, director, year) => {
    const sql = 'INSERT INTO movies SET ?';
    const data= {title, director, year};

    let conn;
    try {
        conn = await pool.getConnection();
        const ret = await conn.query(sql, data);
        console.log(ret);
        const movieId = ret[0]['insertId'];
        return movieId;
    } catch (error) {
        console.error(error);
    } finally {
        if ( conn ) conn.release();
    }
}

MovieModel.getMovie = async (movieId) => {
    const sql = 'SELECT * FROM movies WHERE movie_id = ?';
    let conn;
    try {        
        conn = await pool.getConnection();
        const [rows, metadata] = await conn.query(sql, movieId);
        conn.release();
        return rows[0];
    } catch (error) {
        console.error(error);
    } finally {
        if ( conn ) conn.release();
    }
}

MovieModel.initModel = async () => {
    const sql = 'drop table if exists movies; create table movies ( movie_id int primary key auto_increment, title varchar(50), director varchar(50), year int);';
    await pool.query(sql);
}

module.exports = MovieModel;
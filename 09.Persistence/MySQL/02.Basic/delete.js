const pool = require('./dbConnection');

async function deleteMovie(year) {
    const sql = 'DELETE FROM movies WHERE year = ?';

    let conn;
    try {
        conn = await pool.getConnection();        
        const ret = await conn.query(sql, year);
        const info = ret[0];
        console.log('삭제 대상 Row(affectedRows) :', info['affectedRows']);
    } catch (error) {
        console.error(error);  
    } finally {
        if ( conn ) conn.release();
    }
}

try {
    deleteMovie(2017);    
} catch (error) {
    console.error(error);    
}
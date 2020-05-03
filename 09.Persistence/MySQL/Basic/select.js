const pool = require('./dbConnection');

function find1() {
    const sql = 'SELECT * FROM movies;';
    let connection;
    pool.getConnection().then( conn => {        
        connection = conn;
        return conn.query(sql);
    }).then( ret => {
        console.log('find1 success');
        const rows = ret[0];
        console.log('rows :', rows);
        const metadata = ret[1];
        
        for(let row of rows) {
            console.log(`title: ${row.title}, director: ${row.director}, year: ${row.year}`)
        }

        connection.release();
    }).catch( err => {
        console.error(err);
        if ( connection ) connection.release();
    })
}

async function find2() {
    let conn;
    try {
        conn = await pool.getConnection();
        const sql = 'SELECT * FROM movies;';
        const [rows, metadata] = await conn.query(sql);

        for(let row of rows) {
            console.log(`title: ${row.title}, director: ${row.director}, year: ${row.year}`)
        }

        conn.release();
        
    } catch (error) {
        console.error(error);
        if ( conn ) conn.release();        
    }
}

function selectMoviesByPromise() {
    const sql = 'SELECT * FROM movies WHERE year > ?';
    conn.query(sql, 2017).then(results => {
        for (const row of results) {            
            console.log(row);
        }
        conn.end();
    }).catch( err => {
        console.error('Error :', err);
        conn.end();
    });    
}
try {
    // find1();
    find2();
} catch (error) {
    console.error(error);    
}
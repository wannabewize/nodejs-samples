const pool = require('./dbConnection');

// Promise 기반의 select
function find1() {
    const sql = 'SELECT * FROM movies;';
    let connection;
    pool.getConnection().then( conn => {        
        connection = conn;
        return conn.query(sql);
    }).then( ret => {        
        // SELECT의 결과 row
        const rows = ret[0];
        // metadata
        const metadata = ret[1];
        
        for(let row of rows) {
            console.log(`title: ${row.title}, director: ${row.director}, year: ${row.year}`)
        }

        // 커넥션 반환
        connection.release();
    }).catch( err => {
        console.error(err);
        if ( connection ) connection.release();
    })
}

// async/await를 이용한 검색
async function find2() {
    let conn;
    try {
        conn = await pool.getConnection();
        const sql = 'SELECT * FROM movies;';
        // 0번째가 SELECT결과 row
        const [rows, metadata] = await conn.query(sql);

        for(let row of rows) {
            console.log(`title: ${row.title}, director: ${row.director}, year: ${row.year}`)
        }
    } catch (error) {
        console.error(error);

    } finally {
        // 커넥션 반환.
        if ( conn )
            conn.release();
    }

}

// 조건
async function findByCondtion(year) {
    let conn;
    try {
        conn = await pool.getConnection();
        const sql = 'SELECT * FROM movies WHERE year > ?';
        const [rows, metadata] = await conn.query(sql, year);

        for(let row of rows) {
            console.log(`title: ${row.title}, director: ${row.director}, year: ${row.year}`)
        }        
    } catch (error) {
        console.error(error);
    } finally {
        if ( conn )
            conn.release();
    }
}

try {
    find1();
    // find2();
    // findByCondtion(2017);
} catch (error) {
    console.error(error);    
}
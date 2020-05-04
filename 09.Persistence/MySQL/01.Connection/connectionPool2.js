const mysql = require('mysql2');

const dbConfig = {
   host: 'localhost',
   user: 'dev',
   password: 'secret',
   port: 3306,
   database: 'example',
   connectionLimit: 5,
   waitForConnections: true
};

const pool = mysql.createPool(dbConfig).promise();
pool.on('connection', conn => {
    console.log('connection!', conn.threadId);
});

pool.on('release', conn => {
    console.log('released!', conn.threadId);
});


function doIt2() {    
    pool.getConnection().then(conn => {
        conn.query('SELECT 2;').then( ret => {
            console.log('query result:', ret[0]);
            conn.release();
        })
        .catch( err => {
            console.log('query error:', err);
            conn.release();
        })
    }).catch(err => {
        console.log('connection error:', err);
    });
}

function doIt3() {
    let connection;
    pool.getConnection().then(conn => {
        connection = conn;
        return conn.query('SELECT 3;')
    })
    .then( ret => {
        connection.release();
        console.log('query result:', ret[0]);
    })
    .catch(err => {
        console.log('error:', err);
        // 커넥션 에러인 경우 conn이 undefined
        if ( connection )
            connection.release();
    });
}

async function doIt4() {
    let conn;
    try {
        conn = await pool.getConnection();
        const ret = await conn.query('SELECT 4;');
        console.log('query result:', ret[0]);
    } catch (error) {
        console.log('error:', error);
    } finally {
        // 에러는 커넥션을 얻는 과정 혹은 쿼리 수행 중에 발생 가능
        if ( conn ) {
            conn.release();
        }
    }
}

// doIt2();
// doIt3();
doIt4();


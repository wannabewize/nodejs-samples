const pool = require('./dbConnect');

function doIt() {
    pool.getConnection( (err, conn) => {
        if ( err ) {
            console.log('커넥션 풀에서 커넥션 얻기 실피 :', err);
            return;
        }

        conn.query('SELECT 1 + 1 AS SUM;', (err, results) => {
            if ( err ) {
                console.error('ERROR :', err);
                conn.release();
                pool.end();
                return;
            }
            console.log('RESUTL :', results[0]['SUM']);
            conn.release();
            pool.end();
        });
    });
}

// ConnectionPool에 query를 하면 자동 release
function doItByPoolQuery() {
    pool.query('SELECT 1 + 2 AS SUM;', (err, results) => {
        if ( err ) {
            console.error('ERROR :', err);
            pool.end();
            return;
        }
        console.log('RESUTL :', results[0]['SUM']);
        pool.end();
    });
}

function doItByPromise() {
    pool.promise().query('SELECT 1 + 3 AS SUM;')
    .then( results => {
        const rows = results[0];
        console.log('RESUTL ', rows[0]['SUM']);
        pool.end();
    }).catch(err => {
        console.log('에러', err);
        pool.end();
    });
}

async function doItByAwait() {
    try {
        const results = await pool.promise().query('SELECT 1 + 4 AS SUM;');
        const rows = results[0];
        console.log('RESUTL ', rows[0]['SUM']);
        pool.end();
    } catch (err) {
        console.error('에러', err);
        pool.end();
    }
}

// doIt();
// doItByPoolQuery();
// doItByPromise();
doItByAwait();

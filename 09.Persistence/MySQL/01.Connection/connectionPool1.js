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

const pool = mysql.createPool(dbConfig);

pool.on('release', conn => {
    console.log('released!', conn.threadId);
});


function doIt() {    
    pool.getConnection( (err, conn) => {
        // 커넥션 사용하기
        conn.query('select 1;', (err, ret) => {
            console.log('ret:', ret[0]);

            // 커넥션 풀에 커넥션 반환
            conn.release();
        });
    });
}

doIt();


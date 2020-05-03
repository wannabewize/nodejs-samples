const mysql = require('mysql2');

const dbConfig = {
   host: 'localhost',
   user: 'dev',
   password: 'secret',
   port: 3306,
   database: 'example',
   connectionLimit: 5,
   waitForConnections: false
};

const pool = mysql.createPool(dbConfig).promise();
pool.on('connection', conn => {
    console.log('connection!', conn.threadId);
});

pool.on('release', conn => {
    console.log('released!', conn.threadId);
});


async function doIt() {
    try {
        const conn1 = await pool.getConnection();
        const conn2 = await pool.getConnection();
        const conn3 = await pool.getConnection();
        const conn4 = await pool.getConnection();
        const conn5 = await pool.getConnection();
        const conn6 = await pool.getConnection();
    } catch (error) {
        console.error(error);        
    }
}

doIt();
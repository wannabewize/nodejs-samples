const mysql = require('mysql2');

const config = {
    "host": "localhost",
    "user": "dev",
    "password": "secret",
    "port": 3306,
    "database": "example"
}


async function doIt() {
    try {
        const conn = conn = await mysql.createConnection(config).promise();

        const sql1 = 'INSERT INTO MOVIE';
        const sql2 = '';
    }
    catch ( error ) {
        console.error(error);
    }
}

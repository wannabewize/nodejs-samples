const mysql = require('mysql2');
const dbConfig = {
    host: 'localhost',
    user: 'dev',
    password: '',
    port: 3306,
    database: 'example'
};

function connect() {
    const conn = mysql.createConnection(dbConfig);

    conn.connect((err) => {
        if (err) {
            console.error('DB 연결 실패: ', err);
            return;
        }

        //console.log(conn);
        console.log('DB 연결 성공');
        // 연결 종료
        conn.end();
    });
}

// Promise 기반으로 접속
function connectByPromise() {
    const conn = mysql.createConnection(dbConfig).promise();
    conn.connect().then(ret => {
        console.log('DB 연결 성공');
        conn.end();
    }).catch(err => {
        console.log('DB 연결 실패', err);
    });
}

async function connectByAwait() {
    const conn = mysql.createConnection(dbConfig).promise();
    try {
        await conn.connect();
        console.log('DB 연결 성공');
        conn.end();
    }
    catch (err) {
        console.log('DB 연결 실패', err);
    }
}

// connect();
// connectByPromise();
connectByAwait();

const mysql = require('mysql2');

const dbConfig = {
   host: 'localhost',
   user: 'dev',
   password: 'secret',
   port: 3306,
   database: 'example',
   multipleStatements: true,
};


// prepareTable();
// insertNumberByCallback(1, '일');
// insertNumberByPromise(3, '삼');
// insertNumberByPromise(4, '사');
// selectNumbersByCallback(1);
// selectNumbersByPromise(4);

updateNumbersByAsync(2, '둘');
// deleteNumbersByCallback(5);

function prepareTable() {
    const conn = mysql.createConnection(dbConfig).promise();    
    conn.query('drop table if exists korNumbers; create table korNumbers (id int primary key auto_increment, number int, kor varchar(10));').then(ret => {
        console.log('테이블 준비 완료');
        conn.end();
    }).catch(err => {
        console.log('테이블 생성 실패 :', err);
        conn.end();
    });
}

function insertNumberByCallback(num, kor) {
    const conn = mysql.createConnection(dbConfig);
    const sql = 'INSERT INTO korNumbers (number, kor) VALUES (?, ?);';
    conn.query(sql, [num, kor], (err, result, fields) => {
        if ( err ) {
            console.error('Error :', err);
            return;
        }
        console.log('results :', result);
        console.log('추가된 Row 개수 :', result['affectedRows']);
        console.log('추가된 Row ID : ', result['insertId']);
        conn.end();
    });
}

function insertNumberByPromise(num, kor) {
    const conn = mysql.createConnection(dbConfig).promise();
    const sql = 'INSERT INTO korNumbers (number, kor) VALUES (?, ?);';
    conn.query(sql, [num, kor]).then( results => {
        const metaData = results[0];
        console.log('results :', results);
        console.log('추가된 Row 개수 :', metaData['affectedRows']);
        console.log('추가된 Row ID : ', metaData['insertId']);
        conn.end();
    }).catch( err => {
        console.error('Error :', err);
        conn.end();
    });
}

function selectNumbersByCallback(num) {
    const conn = mysql.createConnection(dbConfig);
    const sql = 'SELECT * from korNumbers WHERE number > ?;';
    conn.query(sql, num, (err, results, fields) => {
        if ( err ) {
            console.error('Error :', err);
            return;
        }

        for (const row of results) {
            console.log(row['number'], row['kor']);
        }
        conn.end();
    });    
}

function selectNumbersByPromise(num) {
    const conn = mysql.createConnection(dbConfig).promise();
    const sql = 'SELECT * from korNumbers WHERE number > ?;';
    conn.query(sql, num).then( results => {
        const rows = results[0];
        for (const row of rows) {
            console.log(row['number'], row['kor']);
        }
        conn.end();
    }).catch(err => {
        console.error('Error :', err);
        conn.end();
    });
}

async function updateNumbersByAsync(value, kor) {
    try {
        const conn = mysql.createConnection(dbConfig).promise();
        const sql = 'UPDATE korNumbers SET kor = ? WHERE number =?;';
        const results = await conn.query(sql, [kor, value]);
        console.log(results);
        const metaData = results[0];
        console.log('조건에 맞는 Row 수 : ', metaData['affectedRows']);
        console.log('변경된 Row 수 : ', metaData['changedRows']);
    } catch (error) {
        console.error('Error :', error);
    }
}

function deleteNumbersByCallback(num) {
    const conn = mysql.createConnection(dbConfig);
    const sql = 'DELETE from korNumbers WHERE number > ?;';
    conn.query(sql, num, (err, result, fields) => {
        if ( err ) {
            console.error('Error :', err);
            return;
        }
        console.log('results :', result);
        console.log('추가된 Row 개수 :', result['affectedRows']);
        console.log('추가된 Row ID : ', result['insertId']);

        conn.end();
    });    
}

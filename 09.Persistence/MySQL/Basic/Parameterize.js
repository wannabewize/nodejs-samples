const mysql = require('mysql2');

const dbConfig = {
   host: 'localhost',
   user: 'dev',
   password: 'secret',
   port: 3306,
   database: 'example',
   multipleStatements: true,
};

const conn = mysql.createConnection(dbConfig).promise();

function prepareTable() {
    conn.query('drop table if exists numbers; create table numbers ( num int, kor varchar(10), eng varchar(10) );').then(ret => {
        console.log('테이블 준비 완료');
        conn.end();
    }).catch(err => {
        console.log('테이블 생성 실패 :', err);
        conn.end();
    });
}

function doItPlainText(num, kor, eng) {
    const sql = 'INSERT INTO numbers VALUES (' + num + ', "' + kor + '", "' + eng + '");';
    console.log('sql :', sql);
    conn.query(sql).then( ret => {
        console.log('doItPlainText Success!')
        conn.end();
    }).catch ( err => {
        console.log('doItPlainText Error :', err);
        conn.end();
    });
}

function doItPlainTextParam(num, kor, eng) {
    const sql = `INSERT INTO numbers VALUES ( ${num}, "${kor}", "${eng}" );`;
    console.log('sql :', sql);
    conn.query(sql).then( ret => {
        console.log('doItPlainTextParam Success!')
        conn.end();
    }).catch ( err => {
        console.log('doItPlainTextParam Error :', err);
        conn.end();
    });
}

function doItQueryParam(num, kor, eng) {
    const sql = 'INSERT INTO numbers VALUES ( ?, ?, ? );';
    console.log('sql :', sql);
    conn.query(sql, [num, kor, eng]).then( ret => {
        console.log('doItQueryParam Success!')
        conn.end();
    }).catch ( err => {
        console.log('doItQueryParam Error :', err);
        conn.end();
    });
}

function doItQueryParam2(values) {
    const sql = 'INSERT INTO numbers SET ?;';
    console.log('sql :', sql);
    conn.query(sql, values).then( ret => {
        console.log('doItQueryParam Success!');
        conn.end();
    }).catch ( err => {
        console.log('doItQueryParam Error :', err);
        conn.end();
    });
}

// prepareTable();
// doItPlainText(1, '일', 'one');
// doItPlainTextParam(2, '이', 'two');
doItQueryParam(3, '삼', 'three');
// doItQueryParam2( { num: 4, kor: '사', eng: 'four'} );

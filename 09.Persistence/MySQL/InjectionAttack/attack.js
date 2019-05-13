const mysql = require('mysql');

const config = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "port": 3306,
    "database": "example",
    "multipleStatements": true
 }


function prepareTable() {
    const conn = mysql.createConnection(config);
    // 테이블 만들기
    const sql = 'create table if not exists User ( name varchar(50) ); insert into User values ("Son Heung-min");';
    conn.query(sql, (err, result) => {
        if ( err ) {
            console.log('테이블 준비 실패');
            return;
        }
        console.log('테이블 준비 완료');
    });
    conn.end();
}

function attack(input) {
    const conn = mysql.createConnection(config);    
    const sql = 'select * from User where name = "' + input + '"';

    conn.query(sql, (err, result) => {
        // Injection 공격 후 정상 쿼리 실행
        const sql2 = 'select * from User;';
        conn.query(sql2, (err, result) => {
            if (err) {
                console.log('Injection 어택 이후의 쿼리 실패:', err);
            }
            else {
                console.log('Injection 어택 이후 쿼리 성공');
            }
            conn.end();
        });
    });
}

function preventAttack(input) {
    const conn = mysql.createConnection(config);
    const sql = 'select * from User where name = ?';
    conn.query(sql, input, (err, result) => {
        // Injection 공격 후 정상 쿼리 실행
        const sql2 = 'select * from User;';
        conn.query(sql2, (err, result) => {
            if (err) {
                console.log('Injection 어택 이후의 쿼리 실패:', err);
            }
            else {
                console.log('Injection 어택 이후 쿼리 성공 ', result);
            }
            conn.end();
        });
    });
}


prepareTable();
const attackInput = 'Son Heung-min"; drop table User; #';
// attack(attackInput);
// preventAttack(attackInput);

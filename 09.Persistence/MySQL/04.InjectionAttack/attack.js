const mysql = require('mysql2');

const config = {
    "host": "localhost",
    "user": "dev",
    "password": "secret",
    "port": 3306,
    "database": "example",
    "multipleStatements": true
 }


async function prepareTable() {
    let conn;
    try {
        conn = await mysql.createConnection(config).promise();
        // 테이블 만들기
        const sql = `create table if not exists User ( name varchar(50) );
                    insert into User values ("Son Heung-min");`;
        const ret = await conn.query(sql);
        console.log('테이블 준비 완료');        
    } catch (error) {
        console.log('테이블 준비 실패', error);   
    } finally {
        if ( conn )
            conn.end();
    }
}

async function attack(input) {
    let conn;
    try {
        conn = await mysql.createConnection(config).promise();    
        const sql = 'select * from User where name = "' + input + '"';
        const ret1 = await conn.query(sql);
        console.log('첫 번째 쿼리 실행. 테이블 삭제됨')

        try {
            // 두 번째 쿼리. 테이블이 사라져서 에러가 발생한다.
            const sql2 = 'select * from User;';      
            const ret2 = await conn.query(sql2);
        } catch (error) {
            console.log('Injection 어택 이후의 쿼리 실패:', err);
        }        
    } catch (error) {
        console.error(error);
    } finally {
        if ( conn ) conn.end();
    }
}

async function preventAttack(input) {
    let conn;
    try {
        conn = await mysql.createConnection(config).promise();    
        const sql = 'select * from User where name = ?';
        const ret1 = await conn.query(sql, input);
        console.log('첫 번째 쿼리 실행. 공격 코드 무력화');

        const sql2 = 'select * from User;';      
        const ret2 = await conn.query(sql2);
        console.log('두 번째 쿼리 성공적');
    } catch (error) {
        console.error(error);
    } finally {
        if ( conn ) conn.end();
    }
}


// prepareTable();
const attackInput = 'Son Heung-min"; drop table User; #';
// attack(attackInput);
preventAttack(attackInput);

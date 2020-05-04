const pool = require('./dbConnection');
const {prepareTable} = require('./prepareTable');

// Promise 기반의 Insert
function add1() {    
    let connection;
    pool.getConnection().then(conn => {        
        connection = conn;
        return conn.query('INSERT INTO movies (title, director, year) VALUES ("어벤져스: 엔드게임", "앤서니 루소, 조 루소", 2019);')
    }).then( ret => {
        console.log('insert result :', ret);
        const data = ret[0];
        const insertId = data.insertId;
        console.log('insert id :', insertId);
        connection.release();
    }).catch(error => {
        console.error(error);
        if ( connection )
            connection.release();
    });
}

// async/await를 이용한 Insert
async function add2() {
    let conn;
    try {
        conn = await pool.getConnection();
        const sql = 'INSERT INTO movies (title, director, year) VALUES (?, ?, ?);';
        const data = ['어벤져스: 인피니티 워', '페이턴 리드', 2018];
        const ret = await conn.query(sql, data);
        console.log('insert success:', ret);
    } catch (error) {        
        console.error(error);
    } finally {
        if ( conn )
            conn.release();
    }
}

// INSERT-SET을 이용한 Insert
async function add3() {
    let conn;
    try {
        conn = await pool.getConnection();
        const sql = 'INSERT INTO movies SET ?;';
        const data = { title: '스파이더맨: 홈커밍', director: '존 왓츠', year: 2017};
        const ret = await conn.query(sql, data);
        console.log('insert success:', ret);        
    } catch (error) {
        console.error(error);
    } finally {
        if ( conn )
            conn.release();
    }    
}

const data = [
    { title: '어벤져스: 엔드게임', director: '앤서니 루소, 조 루소', year: 2019},
    { title: '캡틴 마블', director: '애나 보든, 라이언 플렉', year: 2019},
    { title: '앤트맨과 와스프', director: '페이턴 리드', year: 2018},
    { title: '어벤져스: 인피니티 워', director: '앤서니 루소, 조 루소', year: 2018},
    { title: '블랙 팬서', director: '라이언 쿠글러', year: 2018},
    { title: '토르: 라그나로크', director: '타이카 와이티티', year: 2017},
    { title: '스파이더맨: 홈커밍', director: '존 왓츠', year: 2017}
];

// 다수의 INSERT
async function addMany() {
    let conn;
    try {
        conn = await pool.getConnection();
        let queries = data.map( item => {
            return conn.query('INSERT INTO movies SET ?', item);
        });
        const ret = await Promise.all(queries);
        console.log(ret);
    } catch (error) {
        console.error(error);        
    } finally {
        if ( conn ) conn.release();
    }    
}

try {
    // 테이블 준비 - 다른 예제 동작 전에 필요
    // prepareTable();
    // add1();
    // add2();
    // add3();
    addMany();
} catch (error) {
    console.error(error);    
}
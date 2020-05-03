const pool = require('./dbConnection');
const {prepareTable} = require('./prepareTable');

const data = [
    { title: '어벤져스: 엔드게임', director: '앤서니 루소, 조 루소', year: 2019},
    { title: '캡틴 마블', director: '애나 보든, 라이언 플렉', year: 2019},
    { title: '앤트맨과 와스프', director: '페이턴 리드', year: 2018},
    { title: '어벤져스: 인피니티 워', director: '앤서니 루소, 조 루소', year: 2018},
    { title: '블랙 팬서', director: '라이언 쿠글러', year: 2018},
    { title: '토르: 라그나로크', director: '타이카 와이티티', year: 2017},
    { title: '스파이더맨: 홈커밍', director: '존 왓츠', year: 2017}
];

function add1() {    
    let connection;
    pool.getConnection().then(conn => {        
        connection = conn;
        return conn.query('INSERT INTO movies (title, director, year) VALUES ("어벤져스: 엔드게임", "앤서니 루소, 조 루소", 2019);')
    }).then( ret => {
        console.log('insert result :', ret);
        const insertId = ret[0].insertId;
        console.log('insert id :', insertId);
        connection.release();
    }).catch(error => {
        console.error(error);
        if ( connection ) connection.release();
    });
}

async function add2() {
    let conn;
    try {
        conn = await pool.getConnection();
        const sql = 'INSERT INTO movies (title, director, year) VALUES (?, ?, ?);';
        const data = ['어벤져스: 인피니티 워', '페이턴 리드', 2018];
        const ret = await conn.query(sql, data);
        console.log('insert success:', ret);
        conn.release();
    } catch (error) {
        if ( conn ) conn.release();
        console.error(error);
    }
}

async function add3() {
    let conn;
    try {
        conn = await pool.getConnection();
        const sql = 'INSERT INTO movies SET ?;';
        const data = { title: '스파이더맨: 홈커밍', director: '존 왓츠', year: 2017};
        const ret = await conn.query(sql, data);
        console.log('insert success:', ret);
        conn.release();
    } catch (error) {
        if ( conn ) conn.release();
        console.error(error);
    }
}

async function addMany() {
    let connection;
    try {
        conn = await pool.getConnection();
        let queries = data.map( item => {
            return conn.query('INSERT INTO movies SET ?', item);
        });
        const ret = await Promise.all(queries);
        console.log(ret);
        connection = conn;
    } catch (error) {
        if ( connection ) connection.release();
        console.error(error);        
    }
}

try {
    // 테이블 준비
    // prepareTable();
    // add1();
    // add2();
    // add3();
    addMany();
} catch (error) {
    console.error(error);    
}
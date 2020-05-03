const conn = require('./dbConnection');

exports.prepareTable = () => {
    const sql = 'drop table if exists movies; create table movies (movie_id int primary key auto_increment, title varchar(50), director varchar(50), year int);';
    conn.query(sql).then(ret => {
        console.log('Movies 테이블 준비 완료');
        conn.end();
    }).catch(err => {
        console.log('Movies 테이블 준비 실패 :', err);
        conn.end();
    });
}

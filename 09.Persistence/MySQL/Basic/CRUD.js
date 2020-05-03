const conn = require('./dbConnection');

// prepareTable();
// addMovies();
// selectMoviesByPromise();
// updateMovie1();
// updateMovie2();
// deleteMovie();



function addMovies() {
    const sqls = [
        { title: '어벤져스: 엔드게임', director: '앤서니 루소, 조 루소', year: '2019'},
        { title: '캡틴 마블', director: '애나 보든, 라이언 플렉', year: '2019'},
        { title: '앤트맨과 와스프', director: '페이턴 리드', year: '2018'},
        { title: '어벤져스: 인피니티 워', director: '앤서니 루소, 조 루소', year: '2018'},
        { title: '블랙 팬서', director: '라이언 쿠글러', year: '2018'},
        { title: '토르: 라그나로크', director: '타이카 와이티티', year: '17'},
        { title: '스파이더맨: 홈커밍', director: '존 왓츠', year: '17'}
    ];

    // Query 실행 프라미스 배열 만들기
    const queryPromises = sqls.map( (item) => {
        return conn.query('INSERT INTO movies SET ?', item)
    });

    Promise.all( queryPromises ).then( results => {
        console.log('영화 정보 추가 성공');
        // console.log('results :', results);
        conn.end();
    }).catch( err => {
        console.error('영화 정보 추가 실패 :', err);
        conn.end();
    });
}





function updateMovie1() {
    const sql = 'UPDATE movies SET year = ? WHERE year = ?';
    const params = [2017, 17];

    conn.query(sql, params).then(results => {
        console.log('UPDATE Success');

        const info = results[0];
        // console.log(results);
        console.log('수정 대상 Row(affectedRows) :', info['affectedRows']);
        console.log('수정된 Row(changedRows) :', info['changedRows']);

        console.log('메세지 :', info['info']);
        conn.end();
    }).catch( err => {
        console.error('updateMovie1 실패 :', err);
        conn.end();
    });    
}

// 필드 이름과 객체의 프로퍼티 이름을 동일하게 설정해서 UPDATE
function updateMovie2() {
    const sql = 'UPDATE movies SET ? WHERE title = ?';
    const param = {title: 'Avengers: Endgame', director: 'Anthony Russo, Joe Russo'};
    const title = '어벤져스: 엔드게임';

    conn.query(sql, [param, title]).then(results => {
        console.log('UPDATE Success');

        const info = results[0];

        console.log('메세지 :', info['info']);
        conn.end();
    }).catch( err => {
        console.error('updateMovie2 실패 :', err);
        conn.end();
    });    
}

function deleteMovie() {
    const sql = 'DELETE FROM movies WHERE year = ?';
    const param = 2018;
    // 파라미터가 1개면 배열 형식이 아니어도 된다.
    conn.query(sql, param).then(results => {
        console.log('DELETE Success');

        // console.log(results);
        const info = results[0];
        console.log('삭제된 Row(affectedRows) :', info['affectedRows']);

        conn.end();
    }).catch( err => {
        console.error('deleteMovie 실패 :', err);
        conn.end();
    });    
}
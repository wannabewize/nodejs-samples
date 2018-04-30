const pool = require('./dbConnectionPromise');


// 영화 정보 1개 추가 예제
function insertOneMovie() {
   let connection;
   pool.getConnection().then( conn => {
      connection = conn;
      var sql = 'INSERT INTO movies (title, director, year) VALUES ("인셉션", "크리스토퍼 놀란", 2010);';
      return conn.query(sql);
   }).then( rows => {
      console.log('Insert One Movie Success :', rows);
      connection.release();
   }).catch(err => {
      console.log('Insert One Movie Fail :', err);
      if ( connection )
         connection.release();
   });
}

// insertOneMovie();
insertManyMovie();


// 다수 영화 정보 추가 예제

// Promise를 반환하는 Insert Movie SQL 실행 함수
function insertMovie(conn, movie) {
   var sql = 'INSERT INTO movies (title, director, year) SET ?;';
   return conn.query(sql, movie);
}

function insertManyMovie() {
   let connection;
   pool.getConnection().then( conn => {
      connection = conn;

      Promise.all([
         insertMovie(conn, {titie:"메멘토", director:"크리스토퍼 놀란", year:2000}),
         insertMovie(conn, {titie:"인셉션", director:"크리스토퍼 놀란", year:2010}),
         insertMovie(conn, {titie:"인터스텔라", director:"크리스토퍼 놀란", year:2015})
      ]).then(results => {
         console.log('Insert Many Movies Success :', results);
         connection.release();
      }).catch(err => {
         console.log('Insert Many Movies Failure :', err);
         if ( connection )
            connection.release();
      });
   }).catch( err => {
      console.log('Get connection Failure :', err);
   });
}

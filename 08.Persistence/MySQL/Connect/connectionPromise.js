const dbConnection = require('./connectionPromiseModule');

dbConnection.getConnection().then( conn => {
   console.log('커넥션 풀 모듈에서 커넥션 얻기 성공');
   conn.release();
}).catch( err => {
   console.log('커넥션 풀 모듈에서 커넥션 얻기 실패', err);
});

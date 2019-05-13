const dbConnection = require('./dbconnection');

function doItPromise() {
   dbConnection.getConnection().then( conn => {
      console.log('커넥션 풀 모듈에서 커넥션 얻기 성공');
      // 쿼리 동작시키고 프라미스 반환
      conn.query('SELECT 1 + 2 AS sum').then( result => {
         console.log('쿼리 결과 :', result[0].sum);
         conn.release();
         console.log('데이터베이스 풀 해제');
         dbConnection.end();
      }).catch( err => {
         console.error('쿼리 실패 :', err);
      });
   }).catch( err => {
      console.log('커넥션 얻기 실패', err);
   });
}

async function doItAwait() {
   try {
      const conn = await dbConnection.getConnection();
      console.log('커넥션 풀에서 커넥션 얻기 성공');

      const result = await conn.query('SELECT 1 + 3 AS sum');
      console.log('Result : ', result[0].sum);

      conn.release();

      dbConnection.end();
   }
   catch ( err ) {
      console.error('Error :', err);
   }
}

doItPromise();
// doItAwait();



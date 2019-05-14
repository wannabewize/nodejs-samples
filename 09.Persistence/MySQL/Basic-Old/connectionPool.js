const pool = require('./dbconnection');

pool.getConnection( (err, conn) => {
   if (err) {
      console.error('error connecting: ', err);
      return;
   }

   console.log('풀에서 커넥션 얻기 성공');
   
   // 커넥션을 풀에 반환
   conn.release();

   console.log('커넥션에 풀 반환');

   // 풀 종료
   pool.end();
   console.log('풀 닫기');   
});

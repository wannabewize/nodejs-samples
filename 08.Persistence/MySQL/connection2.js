var pool = require('./dbConnection');

console.log('커넥션 풀 ', pool);
pool.getConnection(function (err, conn) {
   if (err) {
      console.error('error connecting: ', err);
      return;
   }

   console.log('DB 연결 성공 ');
   
   // 커넥션을 풀에 반환
   conn.release();
});

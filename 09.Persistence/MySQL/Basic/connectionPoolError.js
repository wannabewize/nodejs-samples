const mysql = require('mysql');

const dbConfig = {
   host: 'localhost',
   user: 'root',
   password: '',
   port: 3306,
   waitForConnections: false, // 사용 가능한 커넥션이 없으면 에러가 발생
   connectionLimit: 5, // 커넥션의 개수를 5개로 제한
   database: 'example'
};

const pool = mysql.createPool(dbConfig);

// 풀에 커넥션 반환을 안해서 발행하는 에러
for ( var i = 0 ; i < 10; i++) {
   var count = 0;
   pool.getConnection( (err, conn) => {
      if ( err ) {
         console.log('pool.getConnection error', err);
         return;
      }
      // conn.release();
      console.log(`getConnection ${count++} success`);
   });
}

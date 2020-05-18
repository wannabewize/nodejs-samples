const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
   if (err) {
      console.log('MongoDB 서버 연결 실패');
      return;
   }
   console.log('MongoDB 서버 연결 성공');

   // Db 타입
   const db = client.db('example');
   console.log('db :', db, ' type :', db.constructor);

   // 연결 종료하기
   client.close();
});

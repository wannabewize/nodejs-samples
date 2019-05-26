const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/example';

MongoClient.connect(url, {useNewUrlParser: true}, (err, database) => {
   if (err) {
      console.log('MongoDB 연결 실패');
      return;
   }
   console.log('MongoDB 연결 성공');

   // 연결 종료하기
   database.close();
});

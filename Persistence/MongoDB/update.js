var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/Moviest';

var db;

MongoClient.connect(url, function (err, database) {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }

   db = database;
   
   // 다수의 도큐먼트 추가
   var promise = db.collection('movies').insertMany([
      { title: '스타워즈', director: '조지 루카스', year: 1977 },
      { title: '아바타', director: '제임스 카메론' },
      { title: '다크 나이트', director: '크리스토퍼 놀란', year: 2008 },
      { title: '인터스텔라', director: '크리스토퍼 놀란', year: 2014 },
      { title: '스타워즈7', director: 'JJ 에이브럼스', year: 2015 }]);
   promise.then(function (results) {
      console.log('초기 데이터 입력 성공');
      executeUpdateExample();
   }, function (err) {
      console.error('Error : ', err);
   });
});

function executeUpdateExample() {
   var movies = db.collection('movies');
   
   // Update One
   movies.updateOne({ title: '스타워즈' }, { $set: { title: 'StarWars' } }, function (err, result) {
      if (err) {
         console.error('UpdateOne Error ', err);
         return;
      }
      console.log('UpdateOne 성공 ', result);
   });
   
   // Update Multi Option - Promise Based
   movies.update(
      { director: '크리스토퍼 놀란' },
      { $set: { director: 'Christopher Nolan' } }, { multi: true }).then(
      function resolved(results) {
         console.log('Update Success. Promise Based Result : ', results);
       },
      function rejected(err) {
         console.error('Update Error. Rejected : ', err);
      });
}
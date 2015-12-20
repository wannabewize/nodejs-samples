var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/Moviest';

MongoClient.connect(url, function (err, db) {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }
  
   // 콜렉션
   var movies = db.collection('movies');

   // 도큐먼트 하나 추가   
   movies.insert({ title: '인터스텔라', director: '크리스토퍼 놀란', year: 2014 },
      function (err, result) {
         if (err) {
            console.error('Insert Error', err);
            return;
         }
         console.log('INERT 성공');
         // console.log(result);
         console.log('새로 추가한 항목의 ObjectID : ',result.insertedIds[0]);
      }
   );
   
   // 다수의 도큐먼트 추가
   movies.insertMany([
      { title:'스타워즈', director:'조지 루카스', year:1977},
      { title:'아바타', director:'제임스 카메론'}],
      function(err, results) {
         if (err) {
            console.error('Insert Error', err);
            return;
         }
         console.log('INERT Many 성공');
         console.log('새로 추가한 항목들 ObjectID : ', results.insertedIds);      
   });
   
   // Promise Based  
   movies.insert({ title:'스타워즈7', director:'JJ 에이브럼스', year:2015}).then(function(results) {
      // console.log('== Resolved\n', results);
      console.log('Promise Based Insert Result : ', results);
   }, function(err) {
      console.log('== Rejected\n', err);      
   });
});

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/moviest';


MongoClient.connect(url, {useNewUrlParser: true }, (err, client) => {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }   

   const db = client.db();
   // 초기 데이터
   /*
   db.movies.remove({})
   db.movies.insertMany([
    { title: '스타워즈', director: '조지 루카스', year: 1977 },
    { title: '아바타', director: '제임스 카메론' },
    { title: '다크 나이트', director: '크리스토퍼 놀란', year: 2008 },
    { title: '인터스텔라', director: '크리스토퍼 놀란', year: 2014 },
    { title: '스타워즈7', director: 'JJ 에이브럼스', year: 2015 }
   ])
   */
   executeUpdateExample(db);
});

function executeUpdateExample(db) {
   let movies = db.collection('movies');

   movies.updateOne({ title: '스타워즈' }, { $set: { title: 'StarWars' } }, (err, result) => {
      if (err) {
         console.error('UpdateOne Error ', err);
         return;
      }
      console.log('Callback 기반 updateOne 성공: 변경 도큐먼트 개수 : ', result.modifiedCount);
   });

   // Update Multi Option - Promise Based
   movies.update(
      { director: '크리스토퍼 놀란' },
      { $set: { director: 'Christopher Nolan' } }, {multi: true })
      .then(
         result => {
            console.log('Promise 기반 update 성공: 변경 도큐먼트 개수 : ', result.result);
         })
      .catch(err => {
         console.error('Promise 기반 update 실패 : ', err);
      });
}
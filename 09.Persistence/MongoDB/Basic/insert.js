const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/moviest';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }

   const db = client.db();

   doInsertExample(db);
});

async function doInsertExample(db) {

   console.log('db :', db);


   // 콜렉션
   let movies = db.collection('movies');

   console.log('collection movies :', movies);

   // 도큐먼트 추가, 콜백 방식   
   movies.insert({ title: '인터스텔라', director: '크리스토퍼 놀란', year: 2014 },
      (err, result) => {
         if (err) {
            console.error('Insert Error', err);
            return;
         }
         console.log('INERT 성공');
         // console.log(result);
         console.log('새로 추가한 항목의 ObjectID : ', result.insertedIds[0]);
      }
   );

   // 다수의 도큐먼트 추가, 콜백 방식
   movies.insertMany([
      { title: '스타워즈', director: '조지 루카스', year: 1977 },
      { title: '아바타', director: '제임스 카메론' }],
      (err, results) => {
         if (err) {
            console.error('Insert Error', err);
            return;
         }
         console.log('INERT Many 성공');
         console.log('새로 추가한 항목들 ObjectID : ', results.insertedIds);
      });

   // Promise Based  
   movies.insert({ title: '스타워즈7', director: 'JJ 에이브럼스', year: 2015 })
      .then(results => {
         // console.log('== Resolved\n', results);
         console.log('Promise Based Insert Result : ', results);
      }).catch(err => {
         console.log('== Rejected\n', err);
      });

   try {
      let result = await movies.insertOne({title: 'Infinity War', year: 2018})
      console.log('await 기반 Insert 도큐먼트 ID :', result.insertedId);
   }
   catch ( error ) {
      console.log('Insert Error', error);
   }
}

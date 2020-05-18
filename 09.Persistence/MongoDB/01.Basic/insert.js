const MongoClient = require('mongodb').MongoClient

async function doInsertOneCallbackExample(db) {
   // 콜렉션
   const movies = db.collection('movies');

   // 도큐먼트 추가, 콜백 방식   
   movies.insertOne({ title: '인터스텔라', director: '크리스토퍼 놀란', year: 2014 },
      (err, result) => {
         if (err) {
            console.error('Insert Error', err);
            return;
         }
         console.log('doInsertOneCallbackExample 성공');
         // console.log(result);
         console.log('새로 추가한 항목의 ObjectID : ', result.insertedId);
      }
   );
}

async function doInsertManyCallbackExample(db) {
   // 콜렉션
   const movies = db.collection('movies');

   // 다수의 도큐먼트 추가, 콜백 방식
   movies.insertMany([
      { title: '스타워즈', director: '조지 루카스', year: 1977 },
      { title: '아바타', director: '제임스 카메론' }],
      (err, results) => {
         if (err) {
            console.error('Insert Error', err);
            return;
         }
         console.log('doInsertManyCallbackExample 성공');
         console.log('새로 추가한 항목들 ObjectID : ', results.insertedIds);
      });
   }

async function doInsertOnePromiseExample(db) {
   // 콜렉션
   const movies = db.collection('movies');

   // Promise Based  
   movies.insertOne({ title: '스타워즈7', director: 'JJ 에이브럼스', year: 2015 })
      .then(result => {
         console.log('Promise Based Insert ID, Count : ', result.insertedId, result.insertedCount);
      }).catch(err => {
         console.log('== Rejected\n', err);
      });
}

async function doInsertOneAwaitExample(db) {
   // 콜렉션
   const movies = db.collection('movies');

   try {
      let result = await movies.insertOne({title: 'Infinity War', year: 2018});
      console.log('doInsertManyCallbackExample 성공');
      console.log('await 기반 Insert 도큐먼트 ID :', result.insertedId);
   }
   catch ( error ) {
      console.log('Insert Error', error);
   }
}

const url = 'mongodb://localhost:27017/example';
MongoClient.connect(url, {useUnifiedTopology: true}, async (err, client) => {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }

   const db = client.db();

   // doInsertOneCallbackExample(db);
   // doInsertManyCallbackExample(db);
   // doInsertOnePromiseExample(db);
   await doInsertOneAwaitExample(db);
});

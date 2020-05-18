const MongoClient = require('mongodb').MongoClient

async function doFindOneExample(db) {
   // 콜렉션
   let movies = db.collection('movies');   
   
   movies.findOne({director:'크리스토퍼 놀란'}, (err, doc) => {
      if ( err ) {
         return console.log('findOne Error :', err);
      }
      console.log('FindOne Result : ', doc);
   });

   movies.findOne({director:'크리스토퍼 놀란'}).then( doc => {
      console.log('FindOne.then Result :', doc);
   }).catch( err => {
      console.log('FindOne.catch :', err);
   });

   try {
      let doc = await movies.findOne({director: '크리스토퍼 놀란'})
      console.log('await FindOne result :', doc);
   }
   catch ( err ) {
      console.log('await FindOne Error :', err);
   }
}

function doFindWithCursor(db) {
   // 콜렉션
   let movies = db.collection('movies');

   const cursor = movies.find();
   cursor.count( (err, result) => {
       console.log('Cursor.count : ', result);
   });

   cursor.each( (err, doc) => {
      console.log('document : ', doc);
   });
}


async function doFindWithArrayExample(db) {
   // 콜렉션
   let movies = db.collection('movies');
   
   // 전체 목록
   movies.find().toArray( (err, docs) => {
      if ( err ) {
         console.log('== Find ALL, toArray Error ', err);
         return;
      }
      console.log('== Find ALL, toArray');
      for (var i = 0 ; i < docs.length; i++) {
         const doc = docs[i];
         console.log(`id : ${doc._id}, title : ${doc.title}`);
      }

   });

   // 전체 목록. Promise Based
   movies.find().toArray().then( docs => {
      console.log('== Find ALL, toArray, Promise');
      for (const doc of docs) {
         console.log(`id : ${doc._id}, title : ${doc.title}, year : ${doc.year}`);
      }
   }).catch( error => {
      console.log('== Find ALL, toArray, Promise Error : ', error);
   });

   try {
      let docs = await movies.find().toArray();
      console.log('== Find ALL, toArray, Await');
      for (const doc of docs) {
         console.log(`title : ${doc.title}, director: ${doc.dicrector} year : ${doc.year}`);
      }
   } catch ( error ) {
      console.log('== Find ALL, toArray, Await Error : ', error);
   }
   
   // projection, _id 출력 안하기
   const projection = { _id: 0 };
   movies.find({}, projection).toArray( (err, docs) => {
      console.log('== Find ALL with Projection');
      console.log(docs);
   });
}

async function doFindWithConditionExample(db) {   
   // 콜렉션
   let movies = db.collection('movies');

   // Query
   movies.find({ title: '인터스텔라' }).toArray( (err, docs) => {
      console.log('== Find 인터스텔라');
      console.log(docs);
   });
      
   // Query : db.movies.find({year:{$gt:2000} })
   movies.find({ year: { $gte: 2000 } }).toArray( (err, docs) => {
      console.log('== 2000년 이후의 영화');
      console.log(docs);
   });
   
   // Query : 2000년 이후이거나 크리스토포 놀란 작품
   movies.find({ $or: [{ year: { $gte: 2000 } }, { director: "크리스토퍼 놀란" }] }).toArray( (err, docs) => {
      if ( err ) {
         console.log('== OR Query Error :', err); return;
      }
      console.log('== OR Query');
      console.log(docs);
   });

   movies.find({ $or: [{ year: { $gte: 2000 } }, { director: "크리스토퍼 놀란" }] }).toArray()
   .then( docs => {
      console.log('== OR Query, Promised, success');      
   })
   .catch ( error => {
      console.log('== OR Query, Promise 에러 : ', error);
   })

   // 2000년도 이후 작품 숫자
   movies.count({ year: { $gte: 2000 } }, (err, result) => {
      if ( err ) {
         console.log('Count Error : ', err);
         return;
      }
      console.log('Count Result : ', result);
   });

   movies.count({ year: { $lt: 2000 } }).then( count => {
      console.log('Count Result(Promise) : ', count);
   } ).catch( error => {
      console.log('Count Error : ', error);
   });
   
   // limit(2)
   movies.find({}).limit(2).toArray( (err, docs) => {
      console.log('== limit');
      console.log(docs);
   });
}

const url = 'mongodb://localhost:27017/example';

MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }
   const db = client.db();
   // doFindOneExample(db);
   // doFindWithCursor(db)
   // doFindWithArrayExample(db);
   doFindWithConditionExample(db);
});
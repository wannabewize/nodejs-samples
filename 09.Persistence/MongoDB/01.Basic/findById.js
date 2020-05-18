const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID;

async function findByString(db) {
   try {
      const movies = db.collection('movies');

      // ObjectID 문자열 얻기
      const ret = await movies.findOne({});
      const objectIdStr = ret._id.toString();

      // 문자열을 그대로 사용 - 검색 실패   
      const item1 = await movies.findOne({_id:objectIdStr})
      if ( item1 ) {
         console.log('Find By ID Str Success :', item1);
      }
      else {
         console.log('Find By ID Str Failure');
      }
   } catch (error) {
      console.error('Error :', error);
   }
}

async function findByObjectId(db) {
   try {
      const movies = db.collection('movies');

      // ObjectID 문자열 얻기
      const ret = await movies.findOne({});
      const objectIdStr = ret._id.toString();      

      // 문자열을 ObjectID로 변환
      const docId = new ObjectID(objectIdStr);
      const item2 = await movies.findOne({_id:docId})
   
      if ( item2 ) {
         console.log('Find By ObjectID(ID) Success :', item2);
      }
      else {
         console.log('Find By ObjectID(ID) Failure');
      }      

   } catch (error) {
      console.error('Error :', error);
   }
}

const url = 'mongodb://localhost:27017/example';

MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }
   const db = client.db();
   // findByString(db);
   findByObjectId(db);
});
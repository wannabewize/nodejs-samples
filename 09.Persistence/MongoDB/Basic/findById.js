const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/moviest';
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect(url, {useNewUrlParser: true }, (err, client) => {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }   
   // 다수의 도큐먼트 추가
   const db = client.db();
   executeFindByIdExample(db);
});


async function executeFindByIdExample(db) {
   // 콜렉션
   let movies = db.collection('movies');
   
   // ObjectID
   movies.findOne({}).then( (result) => {
      // 임의의 ID를 문자열로 얻기
      var objectIDStr = result._id.toString();

      
      movies.findOne({_id:objectIDStr})
      .then( (result) => {
         console.log('Find By ID Str : \n', result);
      })
      .catch( (err) => {
         console.log('Find By ID Str Error : ', err);
      });
      
      const docId = new ObjectID(objectIDStr);
      movies.findOne({_id:docId})
      .then( (result) => {
         console.log('Find By ObjectID : \n', result);
      })
      .catch( err => {
         console.log('Find By ObjectID Error : ', err);
      });
   });
}
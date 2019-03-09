const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/moviest';
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect(url, (err, db) => {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }   
   // 다수의 도큐먼트 추가
   executeFindByIdExample(db);
});


async function executeFindByIdExample(db) {
   // 콜렉션
   let movies = db.collection('movies');
   
   // ObjectID
   movies.findOne({}).then( (result) => {
      var objectIDStr = result._id.toString();
      
      movies.findOne({_id:objectIDStr}).then(function(result) {
         console.log('Find By ID Str : \n', result);
      }, function(err) {
         console.log('Find By ID Str Error : ', err);
      });
      
      movies.findOne({_id:new ObjectID(objectIDStr)}).then(function(result) {
         console.log('Find By ObjectID : \n', result);
      }, function(err) {
         console.log('Find By ObjectID Error : ', err);
      });
   });
}
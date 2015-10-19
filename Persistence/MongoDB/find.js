var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/Moviest';

MongoClient.connect(url, function (err, db) {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }
   
   // 콜렉션
   var movies = db.collection('movies');
   
   // 전체 목록
   movies.find().toArray(function(err, docs) {
      console.log('== Find ALL');
      console.log(docs);      
   });
   
   // projection
   var projection = {_id:0, title:1};
   movies.find({}, projection).toArray(function(err, docs) {
      console.log('== Find ALL with Projection');
      console.log(docs);      
   });

   // Query
   movies.find({title:'인터스텔라'}).toArray(function(err, docs) {
      console.log('== Find 인터스텔라');
      console.log(docs);
   });
      
   // Query : db.movies.find({year:{$gt:2000} })
   movies.find({year:{$gt:2000}}).toArray(function(err, docs) {
      console.log('== 2000년 이후의 영화');
      console.log(docs);
   });
   
   // Query : db.movies.find({ $or:[ { year: {$gt:2000} },{ director:"크리스토퍼 놀란" } ] } )
   movies.find({ $or:[ { year: {$gt:2000} },{ director:"크리스토퍼 놀란" } ] }).toArray(function(err, docs) {
      console.log('== OR Query');
      console.log(docs);
   });
   
   // limit(5)
   movies.find({}).limit(2).toArray(function(err, docs) {
      console.log('== limit');
      console.log(docs);
   });
});
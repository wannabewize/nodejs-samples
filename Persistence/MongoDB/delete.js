var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/Moviest';

MongoClient.connect(url, function (err, db) {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }
   
   var movies = db.collection('movies');
   
   // Delete One
   movies.deleteOne({title:'스타워즈'}, function(err, result) {
      if ( err ) {
         console.error('DeleteOne Error ', err);
         return;
      }      
      console.log('DeleteOne 성공 ', result);
   });
   
   // Delete Many Documents
   movies.deleteMany({title:'Interstella'}, function(err, result) {
      if ( err ) {
         console.error('DeleteMany Error ', err);
         return;
      }      
      console.log('DeleteMany 성공 ', result);      
   });
});
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/Moviest';

MongoClient.connect(url, function (err, db) {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }
   
   var movies = db.collection('movies');
   
   // Update One
   movies.updateOne({title:'스타워즈'}, {$set:{title:'StarWars'}}, function(err, result) {
      if ( err ) {
         console.error('UpdateOne Error ', err);
         return;
      }      
      console.log('UpdateOne 성공 ', result);
   });
   
   // Update Multi Option
   movies.update({title:'인터스텔라'}, {$set:{title:'Interstella'}}, {multi:true}, function(err, result) {
      if ( err ) {
         console.error('UpdateOne Error ', err);
         return;
      }      
      console.log('Update Multi 성공 ', result);      
   });
});
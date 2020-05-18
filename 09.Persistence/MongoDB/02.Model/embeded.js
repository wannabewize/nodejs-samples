const MongoClient = require('mongodb').MongoClient

function doEmbedExample(db) {
   // 콜렉션
   var movies = db.collection('movies');

   var movieTitle = '영화' + Math.floor(Math.random() * 100);
   // console.log(title);
   
   var review1 = '잘 봤어요 ' + Math.floor(Math.random() * 10000);
   var review2 = '잘 봤어요 ' + Math.floor(Math.random() * 10000);   
   
   movies.insertOne({title:movieTitle, reviews:[{review:review1, rating:4}, {review:review2, rating:5}]}, function(err, result) {
      if( err ) {
         console.log('Insert Error ', err);
         return;
      }
      
      var objectId = result.insertedId;
      console.log('Insert 성공', objectId );
            
      // 리뷰 추가
      var review3 = '잘 봤어요 ' + Math.floor(Math.random() * 10000);
      movies.updateOne({_id:objectId},
         {$push:{reviews:{review:review3, rating:5}}}, function(err, result) {
            if ( err ) {
               console.log('Review 추가 실패 ', err);
               return;
            }
            console.log('Review 추가 성공');            
         }
      );
   });
}

const url = 'mongodb://localhost:27017/example';

MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }

   const db = client.db();
   doEmbedExample(db);   
});
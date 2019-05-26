var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/moviest';

MongoClient.connect(url, {useNewUrlParser: true }, (err, client) => {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }

   const db = client.db();

   // db.movies.insertMany([
   // { title: '스타워즈', director: '조지 루카스', year: 1977 },
   //    { title: '아바타', director: '제임스 카메론' },
   //    { title: '다크 나이트', director: '크리스토퍼 놀란', year: 2008 },
   //    { title: '인터스텔라', director: '크리스토퍼 놀란', year: 2014 },
   //    { title: '스타워즈7', director: 'JJ 에이브럼스', year: 2015 }
   // ])
   doDeleteExample(db);
})

function doDeleteExample(db) {   
   var movies = db.collection('movies');
   
   // Delete One
   movies.deleteOne({title:'스타워즈'}, (err, result) => {
      if ( err ) {
         console.error('DeleteOne Error ', err);
         return;
      }      
      console.log('DeleteOne 성공. 결과 : ', result.result);
   });
   
   // Delete Many Documents
   movies.deleteMany({director:'크리스토퍼 놀란'})
   .then( result => {
      console.log('deleteMany 성공. 결과 : ', result.result);
   })
   .catch( err => {
      console.log('Delete Many Fail : ', err);
   });   
}
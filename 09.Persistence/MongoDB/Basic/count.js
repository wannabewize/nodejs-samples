const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/moviest';

MongoClient.connect(url, {useNewUrlParser: true }, (err, client) => {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }
   const db = client.db();

   // 콜렉션
   const movies = db.collection('movies');   

   movies.countDocuments()
   .then( ret => { console.log('ret : ', ret) })
   .catch( err => {console.log('count error ;', err); });

   movies.countDocuments({ year: { $lt: 2000 } })
   .then( count => {
        console.log('Count, year > 2000: ', count);
    })
    .catch( err => {
        console.error('Count year > 2000 Error : ',err);
    });   
});
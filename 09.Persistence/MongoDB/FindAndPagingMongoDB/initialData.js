var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/pagination';

MongoClient.connect(url, function (err, db) {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }
  
   // 콜렉션
   var movies = db.collection('items');
   var data = [];
   
   for(var i = 0 ; i < 300 ; i++ ) {
      var title = 'item' + i;
      data.push( { title : title } );
   }

   // 다수의 도큐먼트 추가
   movies.insertMany(data,
      function(err, results) {
         if (err) {
            console.error('Insert Error', err);
            return;
         }
         console.log('INSERT Many 성공');
         db.close();      
   });
});

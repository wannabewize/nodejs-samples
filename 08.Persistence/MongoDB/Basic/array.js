const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/moviest';

MongoClient.connect(url, function (err, db) {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }

   // 초기 데이터 입력 쿼리. 
   /*
   db.movies.insertMany([
      { title:'스타워즈', director:'조지 루카스', tag:['SF', 'Series', 'Sword', 'ImFather']},
      { title:'반지의 제왕', director:'피터잭슨', tag:['Fantasy', 'Series', 'War']},
      { title:'아바타', director:'제임스 카메론', tag:['SF', 'Space', 'Avata']}])
      */
     doArrayFindExample(db);
   //   doArrayUpdateExample(db);
});


function doArrayUpdateExample(db) {
   var movies = db.collection('movies');

   // 추가
   movies.update({titie:'스타워즈'},{$push: {tag: 'Space'}}).then(result => {
      console.log('Push Tag Success', result.result);
   }).catch( error => {
      console.log('Push Tag Fail', error);
   });

   // 제거
   movies.update({titie:'스타워즈'},{$pull: {tag: 'ImFather'}}).then(result => {
      console.log('Pull Tag Success', result.result);
   }).catch( error => {
      console.log('Pull Tag  Fail', error);
   });   
}

function doArrayFindExample(db) {
   var movies = db.collection('movies');
   // 배열(TAG)로 검색
   movies.find({tag:'SF'}).toArray( (err, docs) => {
      if (err) {
         console.error('Find Error', err);
         return;
      }
      console.log('Find Success. doc count :', docs.length);
      for (const doc of docs) {
         console.log(`title : ${doc.title}, tag: ${doc.tag}`)
      }
   });
}
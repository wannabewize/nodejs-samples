const MongoClient = require('mongodb').MongoClient


async function insertData(db) {
   try {
      const movies = db.collection('movies');

      await movies.insertMany([
         { title: '스타워즈', director: '조지 루카스', tag: ['SF', 'Series', 'Sword', 'ImFather'] },
         { title: '반지의 제왕', director: '피터잭슨', tag: ['Fantasy', 'Series', 'War'] },
         { title: '아바타', director: '제임스 카메론', tag: ['SF', 'Space', 'Avata'] }]);

      console.log('데이터, 배열 입력 성공');
   } catch (error) {
      console.log('Error :', error);
   }
}
async function doArrayFindExample(db) {
   try {
      const movies = db.collection('movies');

      // 배열(TAG)로 검색
      movies.find({ tag: 'SF' }).toArray((err, docs) => {
         if (err) {
            console.error('Find Error', err);
            return;
         }
         console.log('Find Success. doc count :', docs.length);
         for (const doc of docs) {
            console.log(`title : ${doc.title}, tag: ${doc.tag}`)
         }
      });

   } catch (error) {
      console.log('Error :', error);
   }
}

async function doArrayUpdateExample(db) {
   try {
      const movies = db.collection('movies');

      // 추가
      movies.updateMany({ titie: '스타워즈' }, { $push: { tag: 'Space' } })
         .then(result => {
            console.log('Push Tag Success', result.result);
         }).catch(error => {
            console.log('Push Tag Fail', error);
         });

      // 제거
      movies.updateMany({ titie: '스타워즈' }, { $pull: { tag: 'ImFather' } })
         .then(result => {
            console.log('Pull Tag Success', result.result);
         }).catch(error => {
            console.log('Pull Tag  Fail', error);
         });
   } catch (error) {
      console.log('Error :', error);
   }
}


const url = 'mongodb://localhost:27017/example';

MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }

   const db = client.db();
   // insertData(db);
   // doArrayFindExample(db);
   doArrayUpdateExample(db);
});



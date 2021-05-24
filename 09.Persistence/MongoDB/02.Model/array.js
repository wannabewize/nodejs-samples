const MongoClient = require('mongodb').MongoClient

// 배열 추가
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

// 배열에서 찾기
async function doArrayFindExample(db) {
   try {
      const movies = db.collection('movies');

      // 배열(TAG)로 검색
      const ret = await movies.find({ tag: 'SF' });
      const data = await ret.toArray();
      console.log('find by tag :', data);

   } catch (error) {
      console.log('Error :', error);
   }
}

// 배열 내 정보 업데이트
async function doArrayUpdateExample(db) {   
   const movies = db.collection('movies');
   
   try {
      // 추가
      const result = await movies.updateMany({titie: '스타워즈' }, { $push: { tag: 'Space' } });
      console.log('Push Tag Success', result.result);         
   } catch (error) {
      console.log('Push Tag Fail', error);         
   }

   try {
      const result = await movies.updateMany({titie: '스타워즈' }, { $pull: { tag: 'ImFather' } })
      console.log('Pull Tag Success', result.result);         
   } catch (error) {
      console.log('Pull Tag  Fail', error);         
   }
}


const url = 'mongodb://localhost:27017/example';

MongoClient.connect(url, {useUnifiedTopology: true}, async (err, client) => {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }

   const db = client.db();
   // await insertData(db);
   // await doArrayFindExample(db);
   await doArrayUpdateExample(db);
   await client.close();
});



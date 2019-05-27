const dbConn = require('./connection');

// insertInitialData();
doUpdateExample();

async function insertInitialData() {
   try {
      const db = await dbConn.getConn();
      const movies = db.collection('movies');

      await movies.insertMany([
       { title: '스타워즈', director: '조지 루카스', year: 1977 },
       { title: '아바타', director: '제임스 카메론' },
       { title: '다크 나이트', director: '크리스토퍼 놀란', year: 2008 },
       { title: '인터스텔라', director: '크리스토퍼 놀란', year: 2014 },
       { title: '스타워즈7', director: 'JJ 에이브럼스', year: 2015 }
      ]);
      console.log('초기 데이터 입력 성공');
   } catch (error) {
      console.log('Error :', error);      
   }
}

async function doUpdateExample() {
   try {
      const db = await dbConn.getConn();
      let movies = db.collection('movies');

      // Callback
      movies.updateOne({ title: '스타워즈' }, { $set: { title: 'StarWars' } }, (err, result) => {
         if (err) {
            console.error('UpdateOne Error ', err);
            return;
         }
         console.log('Callback 기반 updateOne 성공: 변경 도큐먼트 개수 : ', result.modifiedCount);
      });
   
      // Update Multi Option - Promise Based
      movies.updateMany(
         { director: '크리스토퍼 놀란' },
         { $set: { director: 'Christopher Nolan' } })
         .then(
            result => {
               console.log('Promise 기반 update 성공: 변경 도큐먼트 개수 : ', result.result);
            })
         .catch(err => {
            console.error('Promise 기반 update 실패 : ', err);
         });      
   } catch (error) {
      console.log('Error :', error);      

   }
}


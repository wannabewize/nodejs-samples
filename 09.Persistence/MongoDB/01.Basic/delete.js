const MongoClient = require('mongodb').MongoClient


async function insertInitialData(db) {
   try {
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

async function doDeleteOneExample(db) {
   try {
      const movies = db.collection('movies');
   
      // Delete One
      movies.deleteOne({title:'스타워즈'}, (err, result) => {
         if ( err ) {
            console.error('DeleteOne Error ', err);
            return;
         }      
         console.log('DeleteOne 성공. 결과 : ', result.result);
      });
   } catch (error) {
      console.log('Error :', error);      
   }    
}

async function doDeleteManyExample(db) {
   try {
      const movies = db.collection('movies');
      
      // Delete Many Documents
      movies.deleteMany({director:'크리스토퍼 놀란'})
      .then( result => {
         console.log('deleteMany 성공. 결과 : ', result.result);
      })
      .catch( err => {
         console.log('Delete Many Fail : ', err);
      });        
   } catch (error) {
      console.log('Error :', error);      
   }
}

const url = 'mongodb://localhost:27017/example';
MongoClient.connect(url, {useUnifiedTopology: true}, async (err, client) => {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }

   const db = client.db();

   // insertInitialData(db);
   // doDeleteOneExample(db);
   doDeleteManyExample(db);
});




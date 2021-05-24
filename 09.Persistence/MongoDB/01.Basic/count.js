const MongoClient = require('mongodb').MongoClient

async function countAll(db) {
    const movies = db.collection('movies');   

   movies.countDocuments()
   .then( ret => { console.log('ret : ', ret) })
   .catch( err => {console.log('count error ;', err); });
}

async function countCondition(db) {
    try {
        const movies = db.collection('movies');  
        
        const ret = await movies.countDocuments({ year: { $lt: 2000 } });
        console.log('Count, year > 2000: ', ret);
    } catch (error) {
        console.error('Count year > 2000 Error : ',err);        
    }
}


const url = 'mongodb://localhost:27017/example';

MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }
   const db = client.db();
//    countAll(db);
   countCondition(db);
});



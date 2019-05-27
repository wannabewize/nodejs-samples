const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/example';

MongoClient.connect(url, {useNewUrlParser: true})
.then( client => {
    console.log('MongoDB 연결 성공');

    const db = client.db();
 
    console.log('db :', db, ' type :', db.constructor);
 
    // 연결 종료하기
    client.close();
})
.catch( err => {
    console.error.length('Connect 에러');
});
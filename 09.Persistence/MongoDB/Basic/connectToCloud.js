const MongoClient = require('mongodb').MongoClient

const fs = require('fs');
const urlFile = fs.readFileSync('./mongoCloudUrl.json');
const url = JSON.parse(urlFile).url

MongoClient.connect(url, (err, database) => {
   if (err) {
      console.log('MongoDB 연결 실패');
      return;
   }
   console.log("MongoDB 연결 성공");
});



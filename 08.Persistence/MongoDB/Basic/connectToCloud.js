const MongoClient = require('mongodb').MongoClient

const fs = require('fs');
const urlFile = fs.readFileSync('./mongoCloudUrl.json');
const url = JSON.parse(urlFile).url

let db;

MongoClient.connect(url, (err, database) => {
  console.log("MongoDB 연결 성공");
  
  db = database;
});



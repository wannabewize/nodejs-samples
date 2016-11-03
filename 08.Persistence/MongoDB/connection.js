var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017';

var db;

MongoClient.connect(url, function(err, database) {
  console.log("MongoDB 연결 성공");
  
  db = database;
});
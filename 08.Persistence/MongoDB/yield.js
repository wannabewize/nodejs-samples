const MongoClient = require('mongodb').MongoClient

var db = yield MongoClient.connect('mongodb://localhost:27017/myproject');
console.log("Connected correctly to server : ", db);

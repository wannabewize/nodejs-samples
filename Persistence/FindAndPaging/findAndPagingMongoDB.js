var express = require('express');
var morgan = require('morgan');

var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/test';
var db;

MongoClient.connect(url, function(err, database) {
   if ( err ) {
      console.log('MongoDB 연결 실패');
      process.exit(1);
   }
   console.log("MongoDB 연결 성공");
   db = database;    
});

var app = express();

app.use(morgan('dev'));

app.set('views', '.');
app.set('view engine', 'ejs');

app.get('/list', showList);

app.listen(3000);

// 페이지 당 출력 개수
var itemNumInPage = 10;

function showList(req, res) {
   var currentPage = parseInt(req.query.page);
   if ( ! currentPage )
      currentPage = 1

   var keyword = req.query.keyword;       
   var conditionExp = new RegExp('"/1' + '/"');
   var condition = {title : conditionExp};
   
   var items = db.collection('items');
   items.count(condition, {}, {_id:0} ,function(err, result) {
      console.log(result);
      
      items.find(condition).toArray(function(err, results) {
         console.log(results);
      });      
      
      res.end('success');
      
   });
}
var express = require('express');
var morgan = require('morgan');

var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/pagination';
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

app.get('/list', showList);

app.listen(3000);

// 페이지 당 출력 개수
var itemNumInPage = 10;

function showList(req, res) {
   var currentPage = parseInt(req.query.page) || 1;

   var keyword = req.query.keyword;       
   var condition = {};
   if ( keyword && keyword.length > 0) {
      // SQL의 title like %12%  
      condition.title = new RegExp(keyword);
   }
   
   var items = db.collection('items');
   items.count(condition, {_id:0} ,function(err, result) {
      var itemCount = parseInt(result);
      // 전체 페이지
      var maxPage = Math.floor(itemCount / itemNumInPage );
      
      // Skip할 개수 계산. page는 1부터 시작
      var skip = itemNumInPage * (currentPage-1);      
      items.find(condition, {_id:0}).limit(itemNumInPage).skip(skip).toArray(function(err, results) {
         console.log(results);
         
         var data = {
            maxPage : maxPage,
            page : currentPage,
            items : results
         }    
         
         res.send(data);         
      });      
   });
}
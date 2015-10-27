var express = require('express');
var morgan = require('morgan');

var mysql = require('mysql');
var dbConfig = {
	host : 'localhost',
	user : 'root',
	password : '',
	port : 3307,
	database : 'test'
};

var conn = mysql.createConnection(dbConfig);

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
   var conditionStr = '%' + keyword + '%';

   var sql1 = 'SELECT count(*) as count FROM items where title like ?';
   
   conn.query(sql1, conditionStr , function(err, result) {
      if ( err ) {
         console.log(err);
         res.sendStatus(500);
         return;
      }
            
      // 전체 아이템 개수
      var itemCount = parseInt(result[0].count);
      // 전체 페이지
      var totalPage = Math.floor(itemCount / itemNumInPage );
      
      // Skip할 개수 계산. page는 1부터 시작
      var skip = itemNumInPage * (currentPage-1);
      
      var sql2 = 'SELECT title FROM items where title like ? LIMIT ?, ?';

      conn.query(sql2, [conditionStr, skip, itemNumInPage], function(err, results) {
         if ( err ) {
            console.log(err);
            res.sendStatus(500);
            return;
         }
         console.log(results);
         
         var data = {
            totalPage : totalPage,
            page : currentPage,
            items : results
         }
         
         res.render('list', {data : data, keyword : keyword});
      });
   });
   
   

}

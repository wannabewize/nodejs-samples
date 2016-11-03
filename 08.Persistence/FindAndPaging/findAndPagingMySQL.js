var express = require('express');
var morgan = require('morgan');

var mysql = require('mysql');
var dbConfig = {
	host : 'localhost',
	user : 'root',
	password : '',
	port : 3306,
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
   // 입력이 없으면 1페이지
   var currentPage = parseInt(req.query.page) || 1;
   console.log(currentPage);
   
   // 검색어
   var keyword = req.query.keyword;
   
   var conditions = [];
   
   var where = '';
   
   if ( keyword && keyword.length > 0 ) {
      where += 'where title like ? '
      conditions.push('%' + keyword + '%')
   }   

   var sql1 = 'SELECT count(*) as count FROM items ' + where;
   
   conn.query(sql1, conditions , function(err, result) {
      if ( err ) {
         console.log(err);
         res.sendStatus(500);
         return;
      }
      
      var sql2 = 'SELECT title FROM items ' + where + ' LIMIT ?, ?';
            
      // 전체 아이템 개수
      var itemCount = parseInt(result[0].count);
      // 전체 페이지
      var maxPage = Math.floor(itemCount / itemNumInPage );      
      // Skip할 개수 계산. page는 1부터 시작
      var skip = itemNumInPage * (currentPage-1);
      
      conditions.push(skip);
      conditions.push(itemNumInPage);
      
      conn.query(sql2, conditions, function(err, results) {
         if ( err ) {
            console.log(err);
            res.sendStatus(500);
            return;
         }
         console.log(results);
         
         var data = {
            maxPage : maxPage,
            page : currentPage,
            items : results
         }
         
         res.render('list', {data : data, keyword : keyword});
      });
   });
   
   

}

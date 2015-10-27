var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));

app.set('views', '.');
app.set('view engine', 'ejs');

app.get('/list', showList);

app.listen(3000);


function showList(req, res) {
   var currentPage = req.query.page;
   if ( ! currentPage ) 
      currentPage = 1
      
   var data = {
      total : 10,
      page : currentPage,
      items : []
   };
   
   for(var i = 0 ; i < 20 ; i ++) {
      data.items.push( 'item' + i );
   }
   
   res.render('list', {data : data});
}

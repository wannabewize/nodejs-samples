var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  database:'Moviest'
});

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/', function(req, res) {  
  var title = req.body.title;
  var latitude = parseFloat(req.body.latitude);
  var longitude = parseFloat(req.body.longitude);

  var sql = 'INSERT INTO cafes(title, location) VALUES (?, Point(?, ?))';  
  connection.query(sql, [title, latitude, longitude], function(err, result) {
    if ( err ) {
      console.error('INSERT ERROR', err);
      res.sendStatus(400);
      return;
    }
    console.log('INSERT RESULT', result);
    res.redirect('/');
  });
});

app.get('/', function(req, res) {  
  var sql = 'SELECT title, location FROM cafes';
  connection.query(sql, function(err, rows, fields) {
    if ( err ) {
      console.error('SELECT ERROR', err);
      return;
    }
    
    console.log('select count', rows.length);
    // console.log('fields', fields);
    
    rows.forEach(function(row, i) {
      console.log(i, row.title, row.location.x, row.location.y);
    });
    
    res.render('cafeList', {'cafeList':rows});
  });	
});

app.listen(3000);


var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();
app.use(session({
   resave:false,
   saveUninitialized:false,
   secret:'Secret Key'}));
   
app.use(bodyParser.urlencoded({extended:false}));

app.post('/login', handleLogin);
app.get('/personal', showPersonalPage);

app.listen(3000);

function handleLogin(req, res) {
   var id = req.body.id;
   var pw = req.body.pw;
   
   if ( id === 'user' && pw === '1234' ) {
      req.session.userid = id;
      res.send('Login Success');
   }   
   else {
      res.send('Login Fail');
   }
}

function showPersonalPage(req, res) {
   var id = req.session.userid;
   if ( id ) {
      res.send('Private Page for ' + id);
   }
   else {
      res.sendStatus(401);
   }
}
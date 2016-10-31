var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var morgan = require('morgan');
var session = require('express-session');


var port = 3001;

var app = express();

app.use(express.static('app'));
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(session({
	secret:'keyboard cat',
	resave:false,
	saveUninitialized:false,
	cookie:{secure:true}
}));

app.listen(port, function(err) {
	if ( err ) {
		console.log('Error : ', err);
		return;
	}
	console.log('Server is running @ ', port);
});


app.get('/', function(req, res){
	req.sendFile('index.html');
});
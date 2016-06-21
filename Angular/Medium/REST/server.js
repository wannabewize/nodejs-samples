var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.route('/movies')
	.get(function(req, res) {
		res.send({msg:'Get Request', data : ['Starwars', 'Interstella', 'Gravity', 'Avata']});
	}).post(function(req, res) {
		res.send({msg:'Post Request', data : {title : req.body.title, director : req.body.director}});
	}).put(function(req, res) {
		res.send({msg:'Put Request'});
	}).delete(function(req, res) {
		res.send({msg:'Delete Request'});
	}
);

app.route('/movies/:item')
	.get(function(req, res) {
		res.send({msg:'Get Request', data : {title:'Avata', director:'James Cameron', synopsis:'투르크막토 짱'} })
	}).post(function(req, res) {
		res.send({msg:'Post Request', param:req.params.item});
	}).put(function(req, res) {
		res.send({msg:'Put Request', param:req.params.item});
	}).delete(function(req, res) {
		res.send({msg:'Delete Request', param:req.params.item});
	}
);

app.listen(3000);
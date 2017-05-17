var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
// 라이브러리 요청
app.use('/lib', express.static('./node_modules'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.route('/movies')
	.get(function(req, res) {
		res.send({msg:'Get /movies Request', data : ['Starwars', 'Interstella', 'Gravity', 'Avata']});
	}).post(function(req, res) {
		res.send({msg:'Post /movies Request', data : {title : req.body.title, director : req.body.director}});
	}).put(function(req, res) {
		res.send({msg:'Put /movies Request'});
	}).delete(function(req, res) {
		res.send({msg:'Delete /movies Request'});
	}
);

app.route('/movies/:item')
	.get(function(req, res) {
		res.send({msg:'Get MovieDetail Request', data : {title:'Avata', director:'James Cameron', synopsis:'투르크막토 짱'} })
	}).post(function(req, res) {
		res.send({msg:'Post MovieDetail Request', param:req.params.item});
	}).put(function(req, res) {
		res.send({msg:'Put MovieDetail Request', param:req.params.item});
	}).delete(function(req, res) {
		res.send({msg:'Delete MovieDetail Request', param:req.params.item});
	}
);

app.listen(3000);
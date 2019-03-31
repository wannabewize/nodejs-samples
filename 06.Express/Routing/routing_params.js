/**
 * Route Parameters
 */

var express = require('express');
var app = express();

app.listen(3000, (err) => {
   console.log('Server is running @3000\n\nGET /user/:id\nGET /movies/:movieId/:actor\nGET /user/sample ( /user/:id와 겹침 )');
});

// 파라미터 1개
app.get('/game/:item',  (req, res) => {
   var item = req.params.item;
   res.send('Game ' + item);
});

// 파라미터 2개
app.get('/movies/:movieId/:actor', (req, res) => {
   var movieId = req.params.movieId;
   var actor = req.params.actor;

   res.send('Actor : ' + actor + ' -  Movie ID : ' + movieId);
});

app.get('/user/:id', (req, res) => {
   res.send('GET /user/:id');
});

// /user/:id 와 겹친다. 위치 변경 필요
app.get('/user/sample', (req, res) => {
   res.send('GET /user/sample');
});


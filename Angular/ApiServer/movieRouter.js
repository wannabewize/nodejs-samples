var fs = require('fs');
var express = require('express');
var router = express.Router();

var content = fs.readFileSync('movieData.json', 'utf8');
var movies = JSON.parse(content);

router.get('/movies', function(req, res) {
    var movieList = [];
    movies.forEach(function(item, index) {
        var info = {
            movieId : item.movieId,
            title : item.title
        };
        movieList.push(info)
    });
    res.json({title:'Movie List', movieList:movieList});
});

module.exports = router;

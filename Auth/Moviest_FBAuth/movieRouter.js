var express = require('express');


var fs = require('fs');
var data = fs.readFileSync('./movieData.json');
var movies = JSON.parse(data);

// 라우터 얻기
var router=express.Router();

router.route('/movies')
    .get(showMovieList)
    .post(isAuthenticated, addMovie);

router.route('/movies/:id')
    .get(showMovieDetail)
    .delete(deleteMovie)
    .put(editMovie);

function showMovieList(req, res) {
    var data = [];
    for ( var i = 0 ; i < movies.length ; i++) {
        var item = movies[i];
        data.push( {id:item.id, title:item.title} );
    }
    var result = { count : data.length, data : data };
    res.send(result);
}

function showMovieDetail(req, res) {
    var id = req.params.id;
    for ( var i = 0 ; i < movies.length ; i++) {
        var item = movies[i];
        if ( item.id == id ) {
            res.send(item);
            return;
        }
    }
    res.sendStatus(404);
}

function addMovie(req, res) {
    // json 으로 전달
    var movie = req.body;

    // 삭제 기능이 없으므로 갯수를 인덱스로
    movie.id = movies.length;
    movies.push(movie);

    res.send({msg:'success'});
}

function deleteMovie(req, res) {
    // TODO : 영화 삭제
}

// 영화 수정
function editMovie(req, res) {
    // TODO
}

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        // 인증된 상태면 다음 미들웨어 실행
        return next();
    }
    // 인증된 상태가 아니면 /로 이동
    res.sendStatus(401);
}

module.exports = router;


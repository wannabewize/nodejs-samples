var express = require('express');

// 라우터 얻기
var router=express.Router();

var fs = require('fs');

var content = fs.readFileSync('movieData.json', 'utf8');
var movies = JSON.parse(content);


router.route('/movies')
	.get(showMovieList)
	.post(addMovie);

router.route('/movies/:title')
	.get(showMovieDetail)
	.delete(deleteMovie)
	.put(editMovie);


function showMovieList(req, res) {
	var movieList = [];
	// TODO : 영화 목록 출력
	movies.forEach(function(item, index) {
		var info = {
			movieId : item.movieId,
			title : item.title
		};
		movieList.push(info)
	});
	res.json({count:movieList.length, movieList:movieList});
}

function showMovieDetail(req, res) {
	// TODO : 영화 상세 정보
}

function addMovie(req, res) {
	// TODO : 새 영화 추가
}

function deleteMovie(req, res) {
	// TODO : 영화 삭제
}

// 영화 수정
function editMovie(req, res) {
	// TODO
}

module.exports = router;

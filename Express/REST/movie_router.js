var express = require('express');
var formidable = require('formidable');

// 라우터 얻기
var router=express.Router();

var fs = require('fs');
var tmpDir = __dirname + '/tmp';
var uploadDir = __dirname + '/uploads';

var content = fs.readFileSync('movieData.json', 'utf8');
var movies = JSON.parse(content);

router.get('/', function(req, res) {
	res.end('Welcome to Movies app');
});

router.route('/newMovie')
	.get(showMovieInputPage);

router.route('/movies')
	.get(showMovieList)
	.post(addMovie);

router.route('/movies/:title')
	.get(showMovieDetail)
	.delete(deleteMovie)
	.put(editMovie);	
	
router.route('/reviews/:title')
	.get(showReviews)
	.post(addReview);		

function showReviews(req, res) {
   // TODO : 리뷰 보기
}

function addReview(req, res) {
   // TODO : 리뷰 작성 POST   
}
	

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
   res.render('movieList', {title:'Movie List', movieList:movieList}); 
}

function showMovieDetail(req, res) {
   // TODO : 영화 상세 정보
}

// 새 영화 입력 페이지
function showMovieInputPage(req, res) {   
   fs.createReadStream('./views/newMovie.html').pipe(res);
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
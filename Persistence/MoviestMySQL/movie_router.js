var express = require('express');
var fs = require('fs');
var pool = require('./dbConnect');

// 라우터 얻기
var router=express.Router();

router.route('/movies/new')
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

module.exports = router;

function showReviews(req, res) {
   // TODO : 리뷰 보기
}

function addReview(req, res) {
   // TODO : 리뷰 작성 POST   
}

function showMovieList(req, res, next) {
   // TODO : 영화 목록 출력
   pool.getConnection(function(err, conn) {
      if ( err ) {
         return next(err);
      }
      var sql = 'SELECT * FROM movies';
      conn.query(sql, function(err, results) {
         if ( err ) {
            return next(err);
         }
         var movieList = '';
         results.forEach(function(item) {
            movieList += item.movie_id + ' ' + item.title + '\n';
         });
         res.end(movieList);            
      });
   });
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
   res.send('TODO : 새 영화 추가');
}

function deleteMovie(req, res) {
   // TODO : 영화 삭제
}

// 영화 수정
function editMovie(req, res) {
   // TODO
}


const express = require('express');
const fs = require('fs');
const Movie = require('../model/movies.js');

// 라우터 얻기
var router=express.Router();

router.get('/movies/new', showMovieInputPage);

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
   res.sendStatus(501); // Not implemented
}

function addReview(req, res) {
   // TODO : 리뷰 작성 POST   
   res.sendStatus(501); // Not implemented
}

function showMovieList(req, res, next) {
   // TODO : 영화 목록 출력
   Movie.getMovieList( (err, result) => {
      if ( err ) {
         return next(err);
      }

      res.send(result);      
   });
}

function showMovieDetail(req, res) {
   // TODO : 영화 상세 정보
   res.sendStatus(501); // Not implemented
}

// 새 영화 입력 페이지
function showMovieInputPage(req, res) {
   console.log('input form :', __dirname + '/../public/newMovie.html');      
   res.sendFile(__dirname + '/../public/newMovie.html');
}

function addMovie(req, res) {
   // TODO : 새 영화 추가
   res.sendStatus(501); // Not implemented
}

function deleteMovie(req, res) {
   // TODO : 영화 삭제
   res.sendStatus(501); // Not implemented
}

// 영화 수정
function editMovie(req, res) {
   // TODO
   res.sendStatus(501); // Not implemented
}


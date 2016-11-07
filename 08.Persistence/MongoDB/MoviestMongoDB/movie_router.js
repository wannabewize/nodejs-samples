var express = require('express');
var fs = require('fs');
var db;
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/Moviest';
var ObjectId = require('mongodb').ObjectID;

MongoClient.connect(url, function (err, database) {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }
   db = database;
});

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
   // 전체 도큐먼트 목록 얻기
	db.collection('movies').find({}).toArray(function(err, docs) {
		if ( err ) {
			console.error(err);
			throw err;
		}
		console.log(docs);		
		res.render('movieList', {movieList:docs});
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
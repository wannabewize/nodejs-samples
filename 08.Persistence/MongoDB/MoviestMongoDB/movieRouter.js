var express = require('express');
var fs = require('fs');

var db;
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/moviest';
const movieModel = require('./movieModel');

MongoClient.connect(url, function (err, database) {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }
   db = database;
});

// 라우터 얻기
var router=express.Router();

router.route('/movies')
	.get(showMovieList)
	.post(addMovie);

router.route('/movies/:id')
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


// 전체 도큐먼트 목록 얻기
function showMovieList(req, res, next) {
   // 직접 데이터베이스에 접근
	// db.collection('movies').find({}).toArray((err, docs) => {
	// 	if ( err ) {
	// 		return next(err);
	// 	}

	// 	let result = {
	// 		count: docs.length,
	// 		data: docs
	// 	}		
	// 	res.send(result);
	// });

	// 모델 사용 - 콜백 기반
	// movieModel.getMovieList( (err, results) => {
	// 	if ( err ) {
	// 		return next(err);
	// 	}

	// 	let resObj = {
	// 		count: results.length,
	// 		data: results
	// 	}		
	// 	res.send(resObj);
	// });

	movieModel.getMovieList().then( results => {
		let resObj = {
			count: results.length,
			data: results
		}		
		res.send(resObj);
	}).catch( error => {
		console.log('error : ', error);
		next(error);
	});
}

async function showMovieDetail(req, res, next) {
	let movieId = req.params.id;
	try {
		let result = await movieModel.getMovieDetail(movieId);
		res.send(result);
	}
	catch ( error ) {
		next(error);
	}	
}

function addMovie(req, res, next) {
   // TODO : 새 영화 추가

   // 바디 파서
   let title = req.body.title;

   // 모델에 호출
   movieModel.addMovie()

   // 결과
   res.send('TODO : 새 영화 추가');
}

function deleteMovie(req, res) {
   // TODO : 영화 삭제
}

// 영화 수정
function editMovie(req, res) {
   // TODO
}
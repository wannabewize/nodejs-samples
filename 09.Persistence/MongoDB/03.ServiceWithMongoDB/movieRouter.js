const express = require('express');
const router=express.Router();
const MovieModel = require('./movieModel');

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
async function showMovieList(req, res, next) {
	try {
		const ret = await MovieModel.getMovieList();
		res.send(ret);
	} catch (error) {
		// TODO : Error 처리
		next(error);
	}
}

async function showMovieDetail(req, res, next) {
	let movieId = req.params.id;
	try {
		let result = await MovieModel.getMovieDetail(movieId);
		res.send(result);
	}
	catch ( error ) {
		next(error);
	}	
}

function addMovie(req, res, next) {
   // TODO : 새 영화 추가

   // 결과
   res.send('TODO : 새 영화 추가');
}

function deleteMovie(req, res, next) {
   // TODO : 영화 삭제

   // 결과
   res.send('TODO : 영화 삭제');
}

// 영화 수정
function editMovie(req, res, next) {
   // TODO : 영화 정보 수정

   // 결과
   res.send('TODO : 영화 정보 수정');
}
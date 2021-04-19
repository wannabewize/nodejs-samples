const express = require('express');
const router = express.Router();
const {movieController} = require('../controller/MovieController');

router.get('/movies', movieController.showMovieList);
router.get('/movies/:movieId', movieController.showMovieDetail);
router.post('/movies', movieController.addMovie);

module.exports = router;

// function showMovieList(req, res) {
//     const movieList = movies.getMovieList();
//     const result = { data:movieList, count:movieList.length };
//     res.send(result);
// }


// // Async-await를 이용하기
// async function showMovieDetail(req, res) {
//     try {
//         // 영화 상세 정보 Id
//         const movieId = req.params.movieId;
//         console.log('movieId : ', movieId);
//         const info = await movies.getMovieDetail(movieId);
//         res.send(info);
//     }
//     catch ( error ) {
//         console.log('Can not find, 404');
//         res.status(error.code).send({msg:error.msg});
//     }
// }


// // 새 영화 추가
// // POST 요청 분석 -> 바디 파서
// async function addMovie(req, res) {
//     const title = req.body.title;

//     if (!title) {
//         res.status(400).send({error:'title 누락'});
//         return;
//     }

//     const director = req.body.director;
//     const year = parseInt(req.body.year);
//     const synopsis = req.body.synopsis;

//     try {
//         const result = await movies.addMovie(title, director, year, synopsis);
//         res.send({msg:'success', data:result});
//     }
//     catch ( error ) {
//         res.status(500).send(error.msg);
//     }
// }
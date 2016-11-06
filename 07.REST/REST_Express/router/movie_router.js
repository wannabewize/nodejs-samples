const express = require('express');
const router = express.Router();


const Movie = require('../model/movies');

router.route('/movies')
	.get(showMovieList)
	.post(addMovie);

router.route('/movies/:movieId')
	.get(showMovieDetail)
	.delete(deleteMovie)
	.put(editMovie);	


function showMovieList(req, res, next) {
	const movieList = Movie.getMovieList();
	res.send(movieList);
}

function addMovie(req, res, next) {
	res.send("TODO")
}

function showMovieDetail(req, res, next) {
	res.send("TODO")
}

function deleteMovie(req, res, next) {
	res.send("TODO")
}

function editMovie(req, res, next) {
	res.send("TODO")
}

module.exports = router;
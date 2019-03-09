const express = require('express');
const router = express.Router();

const Movie = require('../model/movies.js').Movie;
const Review = require('../model/movies.js').Review;
const Actor = require('../model/movies.js').Actor;
const Staring = require('../model/movies.js').Staring;

router.route('/movies')
    .get(sendMovieList)
    .post(addMovies);

router.route('/movies/:movieId')
    .get(sendMovieDetail)
    .post(addReview)
    .delete(deleteMovie)
    .put(editMovie);


function sendMovieList(req, res, next) {
   Movie.findAll({ attributes:['movie_id', 'title']}).then( results => {
      console.log('send movie list : ', results);
      res.send({
         count : results.length,
         data : results
      });
   }, error => {
      next(error);
   });
}

function addMovies(req, res, next) {
   res.sendStatus(501);
}

function sendMovieDetail(req, res, next) {
   const movieId = req.params.movieId;
   Movie.findOne({ movie_id:movieId,
          // Join
         include : [{
            model : Staring, where : { movie_id : movie_id }
         }]
       }
   ).then( result => {
      console.log(result);
      res.send(result);
   }, error => {
      return next(error);
   });
}

function addReview(req, res, next) {
   res.sendStatus(501);
}

function deleteMovie(req, res, next) {
   res.sendStatus(501);
}

function editMovie(req, res, next) {
   res.sendStatus(501);
}

module.exports = router;
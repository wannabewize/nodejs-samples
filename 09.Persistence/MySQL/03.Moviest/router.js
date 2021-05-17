const express = require('express');
const movieRouter = express.Router();
const {sendMovieList, addMovie} = require('./controller');

movieRouter.get('/movies', sendMovieList);

movieRouter.post('/movies', addMovie);

module.exports = movieRouter;
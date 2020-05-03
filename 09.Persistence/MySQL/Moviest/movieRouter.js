const express = require('express');
const movieRouter = express.Router();
const movieModel = require('./movieModel');

movieRouter.get('/movies', (req, res) => {
    movieModel.getMovieList( (err, results) => {
        if (err) {
            console.log('영화 목록 얻기 에러');
            res.status(500).send('Error');
            return;
        }

        res.send({
            count: results.count,
            data: results
        });
    });
});

movieRouter.post('/movies', (req, res) => {
    const movie = {
        title: req.body.title,
        director: req.body.director,
        year: req.body.year};
    
    movieModel.insertMovie(movie).then( result => {
        res.send(result);
    }).catch(error => {
        res.status(500).send({error: error})
    });
});

module.exports = movieRouter;
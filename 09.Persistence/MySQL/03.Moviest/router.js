const express = require('express');
const movieRouter = express.Router();
const movieModel = require('./model');

movieRouter.get('/movies', async (req, res) => {
    const data = await movieModel.getMovieList();
    res.send({
        count: data.count,
        data
    });
});

movieRouter.post('/movies', async (req, res) => {
    const title = req.body.title;
    const director = req.body.director;
    const year = parseInt(req.body.year);

    // 입력 에러 처리
    if ( !title || !director || !year ) {
        res.sendStatus(400);
        return;
    }

    const movieId = await movieModel.insertMovie(title, director, year);
    console.log('ret ;', movieId);

    const data = await movieModel.getMovie(movieId);

    res.send({data});
});

module.exports = movieRouter;
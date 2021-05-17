const express = require('express');
const {getMovieList, insertMovie, getMovie} = require('./model');

exports.sendMovieList = async (req, res) => {
    const data = await getMovieList();
    res.send({
        count: data.count,
        data
    });
}

exports.addMovie = async (req, res) => {
    const title = req.body.title;
    const director = req.body.director;
    const year = parseInt(req.body.year);

    // 입력 에러 처리
    if ( !title || !director || !year ) {
        res.sendStatus(400);
        return;
    }

    const movieId = await insertMovie(title, director, year);
    console.log('ret ;', movieId);

    const data = await getMovie(movieId);

    res.send({data});
}
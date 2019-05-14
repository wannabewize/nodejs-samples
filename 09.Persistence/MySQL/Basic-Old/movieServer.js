const express = require('express');
const app = express();

const movieModel = require('./movieModel');

app.get('/movies', (req, res) => {
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

app.listen(3000);
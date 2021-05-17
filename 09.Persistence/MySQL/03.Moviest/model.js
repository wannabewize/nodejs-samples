const {pool} = require('./dbConnection');

exports.getMovieList = () => {
    return [
        {id: 1, title: 'movie1'},
        {id: 2, title: 'movie2'},
    ]
}

exports.insertMovie = (title, director, year) => {
    return true;
}

exports.getMovie = (movieId) => {
    return {id: 1, title: 'movie1'}
}
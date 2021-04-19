const fs = require('fs');

const data = fs.readFileSync('./model/data.json');
let movies = JSON.parse(data);
console.log('data loaded');


exports.getMovieList = () => {
    if (movies) {
        return movies;
    }
    else {
        return [];
    }
}

// Promise 예제
exports.addMovie = (title, director, year, synopsis) => {    
    return new Promise((resolve, reject) => {
        let last = this.movies[movies.length - 1];
        let id = last.id + 1;

        let newMovie = {id, title, director, year, synopsis};
        movies.push(newMovie);

        resolve(newMovie);
    });
}

exports.getMovieDetail = (movieId) => {
    return new Promise((resolve, reject) => {
        for (var movie of movies ) {
            if ( movie.id == movieId ) {
                resolve(movie);
                return;
            }
        }
        reject({msg:'Can not find movie', code:404});
    });
}

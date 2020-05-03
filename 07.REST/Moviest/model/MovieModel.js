const fs = require('fs');

class Movie {
    constructor() {
        const data = fs.readFileSync('./model/data.json');
        this.movies = JSON.parse(data)
    }

    // Promise 예제
    getMovieList() {
        if (this.movies) {
            return this.movies;
        }
        else {
            return [];
        }
    }

    addMovie(title, director, year, synopsis) {
        return new Promise((resolve, reject) => {
            let last = this.movies[this.movies.length - 1];
            let id = last.id + 1;

            let newMovie = {id, title, director, year, synopsis};
            this.movies.push(newMovie);

            resolve(newMovie);
        });
    }

    // Promise - Reject
    getMovieDetail(movieId) {
        return new Promise((resolve, reject) => {
            for (var movie of this.movies ) {
                if ( movie.id == movieId ) {
                    resolve(movie);
                    return;
                }
            }
            reject({msg:'Can not find movie', code:404});
        });
    }
}

module.exports = new Movie();
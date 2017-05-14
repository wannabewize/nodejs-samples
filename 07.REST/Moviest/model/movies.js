const fs = require('fs');


class Movie {
    constructor() {
        const data = fs.readFileSync('./model/data.json');
        this.data = JSON.parse(data)
    }

    // Promise 예제
    getMovieList() {
        if (this.data) {
            return this.data;
        }
        else {
            return [];
        }
    }

    addMovie(title, director, year, synopsis) {
        return new Promise((resolve, reject) => {
            let last = this.data[this.data.length - 1];
            let id = last.id + 1;

            let newMovie = {id:id, title:title, director:director, year:year, synopsis:synopsis};
            this.data.push(newMovie);

            resolve(newMovie);
        });
    }

    // Promise - Reject
    getMovieDetail(movieId) {
        return new Promise((resolve, reject) => {
            for (var movie of this.data ) {
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
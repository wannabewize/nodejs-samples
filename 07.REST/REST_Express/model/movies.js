const fs = require('fs');

// 초기 데이터 읽기
const data = fs.readFileSync('./model/movieData.json');
const movieList = JSON.parse(data);
console.log('Initial Data : ', movieList.count);

class Movies {
}

Movies.getMovieList = function() {
   const result = {
      count : movieList.count,
      data : movieList
   };
   return result;
}

module.exports = Movies;
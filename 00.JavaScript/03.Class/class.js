/**
 * Class
 */

class Movie {
   // constructor는 1개만
   constructor(title, director) {
      // 프로퍼티 선언
      this.title = title;
      this.director = director;
   }

   // 메소드
   describe() {
      console.log(`title: ${this.title} - diretor: ${this.director}`);
   }
}

const movie1 = {title: "보이지 않는 위험", director: "조지 루카스"};
console.log(movie1.title, movie1.director);

const movie2 = new Movie("클론의 습격", "조지 루카스");
console.log(movie2.title, movie2.director);
movie2.describe();

const movie3 = new Movie("시스의 복수", "조지 루카스");
movie3.describe();

// 프로퍼티 추가
movie3.year = 2005;
console.log('movie3.year:', movie3.year);
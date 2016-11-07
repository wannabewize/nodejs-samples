/**
 * Sequelize를 이용한 영화 정보 CRUD 예제
 */

const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize_example', 'root', '', {});

const Movie = sequelize.define('movie', {
   movie_id : { type:Sequelize.INTEGER(2), primaryKey:true, autoIncrement:true},
   title : Sequelize.STRING,
   director : Sequelize.STRING,
   year : Sequelize.INTEGER
}, {timestamps:false});

//
// 실행 순서
// 1. Movie 모델 정의
// 2. 영화 정보 추가
// 3. 영화 정보 보기
// 3. 수정
// 4. 삭제

// Movie.sync().then(resolved, rejected);
// addNewMovies();
// showMovieList();
// showMovieDetail('제임스 카메론');
// modify();
// removeMovie();


function resolved(result) {
   console.log('Resolved : ', result);
}
function rejected(err) {
   console.log('Rejected ; ', err);
}


function addNewMovies() {
   Movie.create({
      title:'아바타',
      director:'제임스 카메론',
      year:2010   
   }).then( result => {
      console.log('Create Success : ', result.dataValues);
   }, rejected);
   
   Movie.create({
      title:'스타워즈4',
      director:'제임스 카메론',
      year:1977,
      synopsis:'머나먼 옛날..'
   }).then( result => {
      console.log('Create Success : ', result.dataValues);
   }, rejected)   
}

function showMovieList() {
   Movie.findAll({ attributes: ['movie_id', 'title'] })
      .then(function (results) {
         for (var item of results) {
            console.log('movie_id : ', item.movie_id, ' title : ', item.title);
         }
      }, rejected);
}

function showMovieDetail(title) {
   Movie.findOne({
      where:{
         director:title,
         year:{$gt:2000}
      }
   }).then(function(result) {
      // findOne의 결과는 1개
      console.log('id : ', result.movie_id, ' title : ', result.title, ' director : ', result.director);
   }, rejected);
}

function modify() {
   Movie.update({
      title:'Avata'
   }, {
      where : {title:'아바타'}
   }).then( resolved, rejected );
}

function removeMovie() {
   Movie.destroy({
      where:{year:{$lt:2000}}
   }).then(resolved, rejected);
}
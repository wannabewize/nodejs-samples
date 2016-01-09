var Sequelize = require('sequelize');
var sequelize = new Sequelize('moviest', 'root', '1234', {});

var Movie = sequelize.define('movie', {
   title : { type:Sequelize.STRING },
   director : { type:Sequelize.STRING },
   year : { type:Sequelize.INTEGER },
   synopsis : { type:Sequelize.STRING(1024) }
});


function resolved(result) {
   console.log('Resolved : ', result);
}
function rejected(err) {
   console.log('Rejected ; ', err);
}

// Movie.sync().then(resolved, rejected);

// addNewMovies();

// findMovies();
// modify();
deleteMovie();

function addNewMovies() {
   Movie.create({
      title:'아바타',
      director:'제임스 카메론',
      year:2010   
   }).then(resolved, rejected);
   
   Movie.create({
      title:'스타워즈4',
      director:'제임스 카메론',
      year:1977,
      synopsis:'머나먼 옛날..'
   })   
}

function findMovies() {
   Movie.findAll({
      // attributes:['title', 'director'],
      // where:{
      //    director:'제임스 카메론',
      //    year:{$gt:2000}
      // }
   }).then(function(results) {
      // console.log('findAll',results);
      for(var i = 0 ; i < results.length ; i++) {
         var item = results[i];
         
         console.log('id : ', item.id, ' title : ', item.title, ' director : ', item.director);
      }
   }, rejected);
}

function modify() {
   Movie.update({
      synopsis:'인류의 마지막 희망, 행성 판도라! 이 곳을 정복하기 위한 ‘아바타 프로젝트’가 시작된다!'
   }, {
      where : {title:'아바타'}
   }).then(function(result) {
      console.log(result);
   });
}


function deleteMovie() {
   Movie.destroy({
      where:{year:{$lt:2000}}
   }).then(resolved, rejected);
}
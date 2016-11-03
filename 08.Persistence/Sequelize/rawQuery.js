const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize-example', 'root', '', {});

function doSelect() {
   sequelize.query('SELECT * FROM movies').then( results => {
      const movieList = results[0]; // mysql의 경우 같은 내용이 2개
      for(var item of movieList) {
         console.log(item.movie_id, item.title);
      }
   }, error => {
      console.log('Error : ', error.message);
   });
}

function doUpdate() {
   sequelize.query('UPDATE movies SET title="Avata" where title="아바타"')
      .then( result => {
         const updateResult = result[0];
         console.log('Update success : ', updateResult.message);
      }, error => {
         console.log('Update fila : ', error.message);
      });
}


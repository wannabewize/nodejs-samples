const Sequelize = require('sequelize');
const sequelize = new Sequelize('moviest2', 'root', '');

const Movie = sequelize.define('Movie', {
   movie_id : { type : Sequelize.INTEGER, primaryKey:true, autoIncrement:true },
   title : Sequelize.STRING(50),
   director : { type : Sequelize.STRING(50), allowNull : true },
   year : { type:Sequelize.INTEGER(4), defaultValue:0}
}, {timestamps:false});

const Review = sequelize.define('Review', {
   review_id : { type : Sequelize.INTEGER, primaryKey:true, autoIncrement:true },
   review : { type : Sequelize.TEXT }
}, {timestamps:false});

// 1:N 관계
Movie.hasMany(Review, { foreignKey:'movie_id'});


const Actor = sequelize.define('Actor', {
   actor_id : {type:Sequelize.INTEGER(4), primaryKey:true},
   name : {type:Sequelize.STRING(50), allowNull:false}
}, {timestamps:false})


const Staring = sequelize.define('Staring', {
   character : { type:Sequelize.STRING(50), allowNull:false }
}, {timestamps:false});

Actor.belongsToMany(Movie, {through:Staring, foreignKey:'actor_id'});
Movie.belongsToMany(Actor, {through:Staring, foreignKey:'movie_id'});

// 순서 주의
Movie.sync().then( result => {
   console.log('Movie Sync success');

   Review.sync().then( result => {
      console.log('Review sync success');
   }, error => { console.log('Review sync error : ', error.message)});

   Actor.sync().then( result => {
      console.log('Actor sync success');
      Staring.sync().then( result => {
         console.log('Staring sync success');
      }, error => {console.log('Staring sync Error :', error.message);} )
   }, error => { console.log('Actor sync error : ', error.message);});

}, error => { console.log('Movie syn Failure', error.message); });

module.exports.Movie = Movie;
module.exports.Review = Review;
module.exports.Actor = Actor;
module.exports.Staring = Staring;

/**
 CREATE TABLE IF NOT EXISTS `Movies` (
   `movie_id` INTEGER auto_increment ,
   `title` VARCHAR(50),
   `director` VARCHAR(50),
   `year` INTEGER(4) DEFAULT 0,
   PRIMARY KEY (`movie_id`));

 CREATE TABLE IF NOT EXISTS `Reviews` (
   `review_id` INTEGER auto_increment
   `text` TEXT,
   `movie_id` INTEGER,
   PRIMARY KEY (`review_id`),
   FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`movie_id`) ON DELETE SET NULL ON UPDATE CASCADE);

 CREATE TABLE IF NOT EXISTS `Actors` (
   `actor_id` INTEGER(4) ,
   `name` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`actor_id`));

 CREATE TABLE IF NOT EXISTS `Starings` (
   `character` VARCHAR(50) NOT NULL,
   `actor_id` INTEGER(4) ,
   `movie_id` INTEGER ,
   PRIMARY KEY (`actor_id`, `movie_id`),
   FOREIGN KEY (`actor_id`) REFERENCES `Actors` (`actor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
   FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`movie_id`) ON DELETE CASCADE ON UPDATE CASCADE);
 **/


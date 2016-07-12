var Sequelize = require('sequelize');
var sequelize = new Sequelize('sequelize-example', 'root', '');

const Actor = sequelize.define('actor', {
   actor_no : {type:Sequelize.INTEGER(2), primaryKey : true},
   name : Sequelize.STRING(100)
}, { timestamps : false});

const Movie = sequelize.define('movie', {
   movie_id : {type:Sequelize.INTEGER(2), primaryKey : true},
   name : Sequelize.STRING(100)
}, { timestamps : false});

Actor.sync()
    .then( result => {console.log('success')}, error => {console.log('Error : ', error.message)});
Movie.sync()
    .then( result => {console.log('success')}, error => {console.log('Error : ', error.message)});

const Act = sequelize.define('act', {
   year : Sequelize.DATEONLY
}, {timestamps : false});

Actor.belongsToMany(Movie, { through : Act, foreignKey : 'actor_no' })
    .then(result => {console.log('a'), error => {console.log('error');}};
Movie.belongsToMany(Actor, { through : Act, foreignKey : 'movie_id' });

Act.sync().then( result => {console.log('success'), error => {console.log('Error : ', error.message)}});

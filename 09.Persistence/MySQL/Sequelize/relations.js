//
// Sequelize를 이용한 관계
//

var Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', { dialect: 'mysql', host: '127.0.0.1'});

doOneToOne();
// doOneToMany();
// doManyToMany()

/**
 CREATE TABLE IF NOT EXISTS `Users` (
     `user_id` INTEGER(3) auto_increment ,
     `name` VARCHAR(100) NOT NULL,
     PRIMARY KEY (`user_id`)) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `Profiles` (
    `id` INTEGER NOT NULL auto_increment ,
    `address` VARCHAR(255),
    `phone` VARCHAR(11),
    PRIMARY KEY (`id`)) ENGINE=InnoDB;     
 * */
async function doOneToOne() {
    class User extends Sequelize.Model {}
    User.init({
        userId: { type: Sequelize.INTEGER(3), primaryKey: true, autoIncrement: true },
        name: { type: Sequelize.STRING(100), allowNull: false }
    }, {sequelize, timestamps: false});

    class Profile extends Sequelize.Model {}
    Profile.init({
        address: Sequelize.STRING,
        phone: Sequelize.STRING(13)
    }, {sequelize, timestamps: false });

    User.hasOne(Profile);
    // Profile.belongsTo(User, {targetKey:'userId', foreignKey:'userId'});

    try {
        let syncResult1 = await User.sync();
        let syncResult2 = await Profile.sync();

        console.log('sync Scheme success');

        let user = await User.create({name:'IU'});
        let profile = await Profile.create({address:'Korea', phone:'010-1234-5678'});

        console.log('Create Success');

        await user.setProfile(profile);

        const findRet = await User.findAll({include: [{model: Profile}]});
        console.log('file ret :', findRet.name, findRet.userId);
        const findProfile = findRet.profile;
        console.log('Profile :', findProfile);
    }
    catch ( error ) {
        console.log('Error :', error);
    }

    // Promise Based
    // User.sync().then( result => {
    //     return Profile.sync()
    // }).then( result => {
    //     return User.create({name:'IU'});
    // }).then( result => {
    //     console.log(result);
    //     return Profile.create({address:'Korea', phone:'010-1234-5678', userId : result.get('userId')});
    // }).then( result => {
    //     console.log('One to One Example success');
    // }).catch( error => {
    //     console.log('One to One Example Failure', error);
    // });
}




// ing...
// function doManyToMany() {
//     const Actor = sequelize.define('actor', {
//         actor_no: { type: Sequelize.INTEGER(2), primaryKey: true },
//         name: Sequelize.STRING(100)
//     }, { timestamps: false });

//     const Movie = sequelize.define('movie', {
//         movie_id: { type: Sequelize.INTEGER(2), primaryKey: true },
//         name: Sequelize.STRING(100)
//     }, { timestamps: false });

//     Actor.sync()
//         .then(result => { console.log('success') }, error => { console.log('Error : ', error.message) });
//     Movie.sync()
//         .then(result => { console.log('success') }, error => { console.log('Error : ', error.message) });

//     const Act = sequelize.define('act', {
//         year: Sequelize.DATEONLY
//     }, { timestamps: false });

//     Actor.belongsToMany(Movie, { through: Act, foreignKey: 'actor_no' })
//         .then(result => { console.log('a'); }, error => { console.log('error'); });
//     Movie.belongsToMany(Actor, { through: Act, foreignKey: 'movie_id' });

//     Act.sync().then(result => { console.log('success'), error => { console.log('Error : ', error.message) } });
// }



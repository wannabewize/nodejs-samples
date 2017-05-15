//
// Sequelize를 이용한 관계
//

var Sequelize = require('sequelize');
var sequelize = new Sequelize('sequelize_example', 'root', '');

// doOneToOne();
doOneToMany();
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
    const User = sequelize.define('User', {
        userId: { type: Sequelize.INTEGER(3), primaryKey: true, autoIncrement: true },
        name: { type: Sequelize.STRING(100), allowNull: false }
    }, { timestamps: false });

    const Profile = sequelize.define('Profile', {
        address: Sequelize.STRING,
        phone: Sequelize.STRING(13)
    }, { timestamps: false });

    Profile.belongsTo(User, {targetKey:'userId', foreignKey:'userId'});

    try {
        let syncResult1 = await User.sync();
        let syncResult2 = await Profile.sync();

        console.log('sync Scheme success');

        let user = await User.create({name:'IU'});
        let profile = await Profile.create({address:'Korea', phone:'010-1234-5678', userId:user.get('userId')});

        console.log('Create Success');
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

async function doOneToMany() {
    const Member = sequelize.define('Member', {
        memberId: { type: Sequelize.INTEGER(3), primaryKey: true, autoIncrement: true },
        name: { type: Sequelize.STRING(100), allowNull: false }
    }, { timestamps: false });

    const Team = sequelize.define('Team', {
        teamId: { type: Sequelize.INTEGER(3), primaryKey: true, autoIncrement: true },
        name: { type: Sequelize.STRING(100), allowNull: false }
    }, { timestamps: false });

    Team.hasMany(Member, {foreignKey:'teamId'});

    try {
        await Team.sync();
        let team = await Team.create({name:'Favorites'});
        let iu = Member.create({name:'IU', teamId: team.get('teamId')});
        let inna = Member.create({name:'Inna', teamId: team.get('teamId')});
    }
    catch ( error ) {
        console.log('Error :', error);
    }
    
    // Promise based
    // Team.sync().then(result => {    
    //     return Member.sync()
    // }).then(result => {
    //     return Team.create({name:'idols'});
    // }).then(result => {
    //     return Member.create({name:'IU', teamId: result.get('teamId')})
    // }).then(result => {
    //     return Member.create({name:'Inna', teamId: result.get('teamId')})
    // }).then(result => {
    //     console.log('One to Many Example Success')
    // }).catch(error => {
    //     console.log('Error :', error);
    // });    

}


/*
// // Member.belongsTo(Team);
CREATE TABLE IF NOT EXISTS `Members` (
   `member_id` INTEGER(4) ,
   `name` VARCHAR(100) NOT NULL,
   `TeamTeamId` INTEGER(3),
   PRIMARY KEY (`member_id`),
   FOREIGN KEY (`TeamTeamId`)
   REFERENCES `Teams` (`team_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;
*/
/*
// Member.belongsTo(Team, { as : 'team_id'});
CREATE TABLE IF NOT EXISTS `Members` (
   `member_id` INTEGER(4) ,
   `name` VARCHAR(100) NOT NULL,
   `teamIdTeamId` INTEGER(3),
   PRIMARY KEY (`member_id`),
   FOREIGN KEY (`teamIdTeamId`) REFERENCES `Teams` (`team_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;
 */

/*
CREATE TABLE IF NOT EXISTS `Teams` (
   `team_id` INTEGER(3) ,
   `name` VARCHAR(100) NOT NULL,
   PRIMARY KEY (`team_id`)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `Members` (
   `member_id` INTEGER(4) ,
   `name` VARCHAR(100) NOT NULL,
   `TeamTeamId` INTEGER(3),
   PRIMARY KEY (`member_id`),
   FOREIGN KEY (`TeamTeamId`) REFERENCES `Teams` (`team_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;
 */

/*
// Member.belongsTo(Team, { foreignKey : 'team_id'});
CREATE TABLE IF NOT EXISTS `Members` (
   `member_id` INTEGER(4) ,
   `name` VARCHAR(100) NOT NULL,
   `team_id` INTEGER(3),
   PRIMARY KEY (`member_id`),
   FOREIGN KEY (`team_id`) REFERENCES `Teams` (`team_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;
 */


/*
// Team.hasMany(Member, { foreignKey : 'team_id'});
CREATE TABLE IF NOT EXISTS `Members` (
   `member_id` INTEGER(4) ,
   `name` VARCHAR(100) NOT NULL,
   `team_id` INTEGER(3),
   PRIMARY KEY (`member_id`),
   FOREIGN KEY (`team_id`) REFERENCES `Teams` (`team_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;
 */


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



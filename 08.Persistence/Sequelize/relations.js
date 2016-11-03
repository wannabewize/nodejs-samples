var Sequelize = require('sequelize');
var sequelize = new Sequelize('sequelize-example', 'root', '');

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
function doOneToOne() {
    const User = sequelize.define('User', {
        user_id: { type: Sequelize.INTEGER(3), primaryKey: true, autoIncrement: true },
        name: { type: Sequelize.STRING(100), allowNull: false }
    }, { timestamps: false });

    const Profile = sequelize.define('Profile', {
        address: Sequelize.STRING,
        phone: Sequelize.STRING(13)
    }, { timestamps: false });


    //User.hasOne(Profile, {foreignKey:'user_id', as:'Detail'});
    Profile.belongsTo(User, {targetKey:'user_id', foreignKey:'user_id'});

    User.sync({force:true}).then(result => {
        console.log('User sync scucess');
        Profile.sync().then(result => {
            console.log('Profile sync success');

            insertOneToOneData(User, Profile);

        }, error => {
            console.log('Profile sync fail : ', error.message);
        });
    }, error => {
        console.log('User sync failure : ', error.message);
    });
}

function insertOneToOneData(User, Profile) {
    console.log('insertOneToOneData');
    const iu = User.create({name:'IU'}).then( user => {
        console.log('create iu success', user.dataValues);
        return Profile.create({address:'Seoul', phone:'010-1234-5678', user_id : user.get('user_id')});
    }, error => {
        console.log('create iu fail');
    }).then( detail => {
        console.log('detail create success', detail.dataValues);
    }, error => {
        console.log('detail creation fail : ', error.message);
    });
}


function doOneToMany() {
    const Member = sequelize.define('Member', {
        member_id: { type: Sequelize.INTEGER(3), primaryKey: true, autoIncrement: true },
        name: { type: Sequelize.STRING(100), allowNull: false }
    }, { timestamps: false });

    const Team = sequelize.define('Team', {
        team_id: { type: Sequelize.INTEGER(3), primaryKey: true, autoIncrement: true },
        name: { type: Sequelize.STRING(100), allowNull: false }
    }, { timestamps: false });

    Team.hasMany(Member, {foreignKey:'team_id'});

    Team.sync().then(result => {
        console.log('Member sync fulfilled');
        Member.sync().then(
                result => {
                    console.log('Member sync fulfilled');
                    insertOneToManyData(Member, Team);
                },
                error => { console.log('Member sync Error : ', error)}
        );
    }, error => { console.log('Member sync Error : ', error) });
}

function insertOneToManyData(Member, Team) {
    console.log('insert One to Many Data');
    
    Team.create({name:'idols'}).then( result => {
            console.log('insert success : ', member.dataValues);
            return Member.create({name:'IU', team_id: result.get('team_id') })
        }, error => {console.log('Team create fail', error.message);})
        .then( result => {console.log('Member create success');}, error => {
            console.error('Member create Error');
        });
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


function doManyToMany() {
    const Actor = sequelize.define('actor', {
        actor_no: { type: Sequelize.INTEGER(2), primaryKey: true },
        name: Sequelize.STRING(100)
    }, { timestamps: false });

    const Movie = sequelize.define('movie', {
        movie_id: { type: Sequelize.INTEGER(2), primaryKey: true },
        name: Sequelize.STRING(100)
    }, { timestamps: false });

    Actor.sync()
        .then(result => { console.log('success') }, error => { console.log('Error : ', error.message) });
    Movie.sync()
        .then(result => { console.log('success') }, error => { console.log('Error : ', error.message) });

    const Act = sequelize.define('act', {
        year: Sequelize.DATEONLY
    }, { timestamps: false });

    Actor.belongsToMany(Movie, { through: Act, foreignKey: 'actor_no' })
        .then(result => { console.log('a'); }, error => { console.log('error'); });
    Movie.belongsToMany(Actor, { through: Act, foreignKey: 'movie_id' });

    Act.sync().then(result => { console.log('success'), error => { console.log('Error : ', error.message) } });
}



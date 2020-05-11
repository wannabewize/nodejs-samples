//
// Sequelize를 이용한 관계
//
var Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', { dialect: 'mysql', host: '127.0.0.1'});

const Member = sequelize.define('Member', {
    memberId: { type: Sequelize.INTEGER(3), primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING(100), allowNull: false }
}, { timestamps: false });

const Team = sequelize.define('Team', {
    teamId: { type: Sequelize.INTEGER(3), primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING(100), allowNull: false }
}, { timestamps: false });

async function doOneToMany() {
    Team.hasMany(Member, {foreignKey:'teamId'});

    try {
        await Team.sync();
        const team = await Team.create({name:'Twice'});
        const iu = Member.create({name:'IU', teamId: team.get('teamId')});
        const inna = Member.create({name:'Inna', teamId: team.get('teamId')});
    }
    catch ( error ) {
        console.log('Error :', error);
    }
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
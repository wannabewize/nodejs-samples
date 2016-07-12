const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize-example', 'root', '');

// 복수형 단어로 자동 변환 : Person => People
const Person = sequelize.define('Person', {
   name : Sequelize.STRING(50),
   birthYear : Sequelize.INTEGER
});

/**
 CREATE TABLE IF NOT EXISTS `People` (
 `id` INTEGER NOT NULL auto_increment ,
 `name` VARCHAR(50), `birthYear` INTEGER,
 `createdAt` DATETIME NOT NULL, // timestamps 옵션
 `updatedAt` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
 ) ENGINE=InnoDB
 */

Person.sync().then( result => {
   console.log('Person Synchronize Success : ', result);
}, error => {
   console.log('Person Synchronize Error : ', error.message);
});


// 테이블 이름 설정
// 타입 설정 상세화
// PK 설정 ->id 생성 안함
const Idol = sequelize.define('Idol', {
   idol_no : {type:Sequelize.INTEGER(3), primaryKey:true },
   name : {type:Sequelize.STRING(50), allowNull : false}
}, {timestamps:false, tableName : 'idol'})

/**
CREATE TABLE IF NOT EXISTS `idol` (
   `idol_no` INTEGER(3),
   `name` VARCHAR(50) NOT NULL
   PRIMARY KEY (`idol_no`)
) ENGINE=InnoDB;
*/

 Idol.sync().then(result => {
    console.log('Idol Synchronize Success : ', result);
 }, error => {
    console.log('Idol Synchronize Error : ', error.message);
 });


const Member = sequelize.define('Member', {
   member_id : {type:Sequelize.INTEGER(4), primaryKey:true},
   name : {type:Sequelize.STRING(100), allowNull : false}
}, {timestamps:false});

const Team = sequelize.define('Team', {
   team_id : {type:Sequelize.INTEGER(3), primaryKey:true},
   name : {type:Sequelize.STRING(100), allowNull:false}
}, {timestamps:false});

Team.sync().then( result => { console.log( 'Member sync fulfilled' );}, error => { console.log('Member sync Error : ', error)});

// Member.belongsTo(Team);
// Member.belongsTo(Team, { foreignKey : 'team_id'});
// Team.hasMany(Member, { foreignKey : 'team_id'});
Member.belongsToMany(Team, { through : 'Belong'});

Member.sync().then( result => { console.log( 'Member sync fulfilled' );}, error => { console.log('Member sync Error : ', error)});

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
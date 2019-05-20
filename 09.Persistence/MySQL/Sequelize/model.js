const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize_example', 'dev', 'secret', {
   dialect: 'mysql',
   host: '127.0.0.1'
});

class NumberLang extends Sequelize.Model {}
NumberLang.init({
   // attribute
   number: Sequelize.INTEGER,
   kor: Sequelize.STRING,
   eng: Sequelize.STRING
}, {sequelize});

NumberLang.sync().then( ret => {
   console.log('Sync Success :', ret);
}).catch(error => {
   console.log('Sync Failure :', error);
});

class Month extends Sequelize.Model {}
Month.init({
   number: {
      type: Sequelize.SMALLINT,
      unique: true,
      validate: { min: 1, max: 12 }
   },
   kor: {
      type: Sequelize.STRING,
      allowNull: true
   }
}, {modelName: 'month', tableName: 'MonthKor', sequelize});

Month.sync({force:true}).then( ret => {
   console.log('Sync Success :', ret);
}).catch(error => {
   console.log('Sync Failure :', error);
});

// 복수형 단어로 자동 변환 : Person => People
// const Person = sequelize.define('Person', {
//    name : Sequelize.STRING(50),
//    birthYear : Sequelize.INTEGER
// });

/**
 CREATE TABLE IF NOT EXISTS `People` (
 `id` INTEGER NOT NULL auto_increment ,
 `name` VARCHAR(50), `birthYear` INTEGER,
 `createdAt` DATETIME NOT NULL, // timestamps 옵션
 `updatedAt` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
 ) ENGINE=InnoDB
 */

// Person.sync().then( result => {
//    console.log('Person Synchronize Success : ', result);
// }, error => {
//    console.log('Person Synchronize Error : ', error.message);
// });


// 테이블 이름 설정
// 타입 설정 상세화
// PK 설정 ->id 생성 안함
// const Idol = sequelize.define('Idol', {
//    idol_no : {type:Sequelize.INTEGER(3), primaryKey:true },
//    name : {type:Sequelize.STRING(50), allowNull : false}
// }, {timestamps:false, tableName : 'idol'})

/**
CREATE TABLE IF NOT EXISTS `idol` (
   `idol_no` INTEGER(3),
   `name` VARCHAR(50) NOT NULL
   PRIMARY KEY (`idol_no`)
) ENGINE=InnoDB;
*/

// Idol.sync().then(result => {
//    console.log('Idol Synchronize Success : ', result);
// }, error => {
//    console.log('Idol Synchronize Error : ', error.message);
// });
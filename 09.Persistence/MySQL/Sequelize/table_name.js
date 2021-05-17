const Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', {
   dialect: 'mysql',
   host: '127.0.0.1'
});

// 테이블 이름 자동 설정
class Singer extends Sequelize.Model {}
Singer.init({
    name : Sequelize.STRING(50),
},{sequelize});
Singer.sync({force:true}).then( ret => {
    console.log('Sync Success :', ret);
}).catch(error => {
    console.error('Sync Failure :', error);
});

// 복수형 단어로 자동 변환 : Person => People
class Person extends Sequelize.Model {}
Person.init({
   name : Sequelize.STRING(50),
   birthYear : Sequelize.INTEGER
}, {
    createdAt: true,
    sequelize
});
Person.sync({force: true}).then( ret => {
    console.log('Sync Success :', ret);
}).catch(error => {
    console.error('Sync Failure :', error);
});

// 테이블 이름 직접 지정. option의 tableName
class Actor extends Sequelize.Model {}
Actor.init({
   name : Sequelize.STRING(50),
   birthYear : Sequelize.INTEGER
}, {
    updatedAt: true,
    tableName: 'MyActor',
    sequelize
});
Actor.sync({force:true}).then( ret => {
    console.log('Sync Success :', ret);
}).catch(error => {
    console.error('Sync Failure :', error);
});

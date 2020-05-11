const Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', {
   dialect: 'mysql',
   host: '127.0.0.1'
});

// 자동 생성 id
class Car extends Sequelize.Model {}
Car.init({
    name: Sequelize.STRING
}, {sequelize});

Car.sync({force: true}).then( ret => {
    console.log('Sync Success :', ret);
}).catch(error => {
    console.error('Sync Failure :', error);
});

// 수동으로 PK 설정 -> 자동 생성 안함
class Airplane extends Sequelize.Model {}
Airplane.init({
    airplane_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING
}, {sequelize});

Airplane.sync({force: true}).then( ret => {
    console.log('Sync Success :', ret);
}).catch(error => {
    console.error('Sync Failure :', error);
});
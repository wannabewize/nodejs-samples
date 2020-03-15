const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize_example', 'dev', 'secret', {
    dialect: 'mysql', host: '127.0.0.1'
});

const sequelize2 = new Sequelize('mysql://dev:secret@127.0.0.1:3306/sequelize_example');

sequelize2.authenticate()
.then(() => {
    console.log('Sequelize DB 연결 성공');
})
.catch(err => {
    console.error('Sequelize DB 연결 실패 :', err);
});
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize_example', 'dev', '', {
    dialect: 'mysql',
    host: 'localhost'
});

sequelize.authenticate()
.then(() => {
    console.log('DB 연결 성공');
})
.catch(err => {
    console.error('DB 연결 실패 :', err);
});
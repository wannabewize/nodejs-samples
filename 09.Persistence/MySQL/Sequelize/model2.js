const Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', {
   dialect: 'mysql',
   host: '127.0.0.1'
});

// Define 함수로 정의
const NumberLang = sequelize.define('NumberLang',{
   // property 정의
   number: Sequelize.INTEGER,
   kor: Sequelize.STRING,
   eng: Sequelize.STRING
});

NumberLang.sync().then( ret => {
   console.log('Sync Success :', ret);
   sequelize.close();
}).catch(error => {
   console.error('Sync Failure :', error);
});
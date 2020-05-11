const Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', {
   dialect: 'mysql',
   host: '127.0.0.1'
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
}, {tableName: 'MonthKor', sequelize});

Month.sync({force:true}).then( ret => {
   console.log('Sync Success :', ret);
}).catch(error => {
   console.log('Sync Failure :', error);
});

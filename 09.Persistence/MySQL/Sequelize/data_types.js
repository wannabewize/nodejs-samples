const Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', {
   dialect: 'mysql',
   host: '127.0.0.1'
});

class DataTypes extends Sequelize.Model {}

DataTypes.init({
   string1: Sequelize.STRING,
   string2: Sequelize.STRING(100),
   string3: Sequelize.TEXT,

   integer1: Sequelize.INTEGER,
   integer2: Sequelize.INTEGER(1),
   integer3: Sequelize.BIGINT,

   date1: Sequelize.DATE,
   date2: Sequelize.DATE(6),
   date3: Sequelize.DATEONLY,
}, {sequelize});


DataTypes.sync({force:true}).then(ret => {
    console.log('Sync Success :', ret);
    sequelize.close();
}).catch(
    err => console.error(err)
);
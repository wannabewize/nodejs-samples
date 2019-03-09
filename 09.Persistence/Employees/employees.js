const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize-example', 'root', '', {
   host : 'localhost',
   dialet : 'mysql',
   pool : { max : 5, min : 0, idle : 1000}
});

sequelize.authenticate().then(result =>{
   console.log('Fulfileld : ', result);
}, error => {
   console.log('Rejected : ', error);
});


// DATA TYPES : http://docs.sequelizejs.com/en/latest/docs/models-definition/#data-types
const Employee = sequelize.define('employees', {
   emp_no : {type : Sequelize.INTEGER(11), primaryKey : true },
   birth_date : { type : Sequelize.DATEONLY, allowNull : false  }, // DATE
   first_name : { type : Sequelize.STRING(14), allowNull : false },
   last_name : { type : Sequelize.STRING(16), allowNull : false },
   gender : { type : Sequelize.ENUM('M', 'F'), allowNull : false },
   hire_date : { type : Sequelize.DATEONLY, allowNull : false } // DATE
}, { timestamps : false });

Employee.sync().then( result => {
   console.log('sync fulfileld : ', result);
}, error => {
   console.log('sync rejected : ', error);
});

const DeptEmp = sequelize.define('dept_emp', {
   dept_no : { type : Sequelize.CHAR(4), primaryKey : true },
   from_date : { type : Sequelize.DATEONLY, allowNull : false},
   to_date : { type : Sequelize.DATEONLY, allowNull : false }
}, {timestamps : false, tableName : 'dept_emp'});

DeptEmp.sync().then(
    result => { console.log('DeptEmp sync fulfilled : ', result);},
error => { console.log('DeptEmp rejected : ', error);
});

//DeptEmp.hasMany(Employee, { foreignKey : 'emp_no'});
Employee.belongsToMany(DeptEmp, {});


// Employee.findAll().then( result => {
//    // console.log('findAll fulfilled : ', result);
//    for(var employee of result) {
//       console.log(employee.emp_no, employee.first_name, employee.last_name);
//    }
// }, error => {
//    console.log('findAll rejected : ', error);
// });

module.exports = Employee;
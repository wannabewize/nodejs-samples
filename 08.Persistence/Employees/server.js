const express = require('express');
const Employee = require('./employees.js');

const app = express();
app.listen(3000);

app.use(express.static('./public'));

app.get('/', sendIndexHtml);
app.get('/employee', showEmployee);
app.get('/employee/:emp_no', showEmployeeDetail);

function sendIndexHtml(req, res) {
   res.sendFile(__dirname + '/public/index.html');
}

function showEmployeeDetail(req, res) {
   const emp_no = req.params.emp_no;
   console.log('employee detail : ', emp_no);
   res.send('Emp Detail');
}

function showEmployee(req, res) {
   console.log('params : ', req.params);

   const page = parseInt(req.query.page) || 0;
   const count = parseInt(req.query.count) || 30;

   console.log('paging param : ', page, count);

   const paging = { offset : (page * count), limit : count};
   console.log('paging : ', paging);

   const nextUrl = `/employee?page=${page+1}&count=${count}`;
   const prevUrl = `/employee?page=${Math.max(0, page-1)}&count=${count}`;

   Employee.findAll(paging).then( result => {
      var result = {
         count : count,
         page : page,
         next : nextUrl,
         prev : prevUrl,
         data : result
      };
      res.send(result);
   }, error => {
      console.log('findAll rejected : ', error);
   });
}

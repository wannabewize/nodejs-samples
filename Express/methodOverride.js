// 작성중
var express = require('express');
var methodOverride = require('method-override');

var app = express();
app.use(methodOverride('_method'));

app.get('/', showForm);

app.post('/', function(req, res) {
   res.send('Post Request');
});

app.delete('/', function(req, res) {
   res.send('Delete Request');
});

app.listen(3000);

function showForm(req, res) {
   var body = '<html>';
   body += '<head><meta charset="UTF-8"></head>';
   body += '<body>';
   body += '<h3>Method override Sample</h3>';
   body += '<form method="POST" action="/?_method=DELETE" >';
   body += '<input type="hidden" name="_method" value="DELETE">';
   body += '<button type="submit">Delete</button>';
   body += '</form>';
   body += '</body></html>';
   res.send(body);
}
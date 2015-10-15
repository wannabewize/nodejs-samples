var express = require('express');
var app = express();
app.listen(3006, function(err) {
   console.log('Server is listening @3006');
});

app.get('/', function(req, res) {
   var query = req.query;
   var command = query['command'];
   if ( command == 'crash' ) {
      throw new Error('Error');
   }
   res.send('Remote Crash ? command=crash');
});
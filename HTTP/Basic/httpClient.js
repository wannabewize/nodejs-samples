var http = require('http');
var option = {
  hostname : 'google.com',
  method : 'GET' 
};
var req = http.request(option, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  
  res.on('data', function(chunk) {
      console.log(chunk.toString());
   });
   res.on('end', function() {
      console.log('== End Event');
   });
});

req.on('error', function(err) {
   console.error('Error : ', err);
})

req.end();
const http = require('http');

const option = {
   hostname: 'google.com',
   method: 'GET'
};

var req = http.request(option, function (res) {
   console.log('STATUS: ' + res.statusCode);

   console.log('== HEADERS ==');
   for(var key in res.headers ) {
      console.log(key, ':', res.headers[key]);
   }

   res.on('data', function (chunk) {
      console.log(chunk.toString());
   });
   res.on('end', function () {
      console.log('== End Event');
   });
});

req.on('error', function (err) {
   console.error('Error : ', err);
});

req.end();
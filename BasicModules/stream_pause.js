var fs = require('fs');

var file = 'stream_pause.js';
var is = fs.createReadStream(file);
// flowing 모드 중지
is.pause();

is.on('readable', function() {
   console.log('readable event');
   
   // 10바이트씩 읽기
   while( chunk = is.read(10) ) {
      console.log('chunk : ', chunk.toString());  
   }
});

is.on('end', function() {
   console.log('end event');
});

is.on('error', function(err) {
   console.error('error event : ', err);
});
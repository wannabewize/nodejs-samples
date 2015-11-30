var fs = require('fs');

var file = 'stream_pause.js';
var is = fs.createReadStream(file);

// 'data' 이벤트가 없으면 paused mode
is.on('readable', function() {
   console.log('== READABLE EVENT');   
   
   // 10바이트씩 읽기
   while( chunk = is.read(10) ) {
      console.log('chunk : ', chunk.toString());  
   }
});

// end 이벤트
is.on('end', function() {
   console.log('== END EVENT');
});

is.on('close', function() {
   console.log('== CLOSE EVENT');
})
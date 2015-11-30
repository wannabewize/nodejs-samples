var fs = require('fs');

var file = 'stream_flowing.js';//'image.jpg';
var is = fs.createReadStream(file);

is.on('readable', function() {
   console.log('== READABLE EVENT');   
});

is.on('data', function(chunk) {
   console.log('== DATA EVENT');
   console.log(chunk.toString());   
});

// end 이벤트
is.on('end', function() {
   console.log('== END EVENT');
});

is.on('close', function() {
   console.log('== CLOSE EVENT');
})
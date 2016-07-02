const fs = require('fs');

const file = '/Users/wannabewize/Downloads/node-v6.1.0.pkg'; // 'stream_pause.js';

const is = fs.createReadStream(file);

// 'data' 이벤트가 없으면 paused mode
is.on('readable', () => {
   console.log('== READABLE EVENT');
   readFile(); 
});

function readFile() {
   // 10바이트씩 읽기
   while( chunk = is.read(1000) ) {
      console.log('chunk : ', chunk.length);  
   }
}

// is.on('data', chunk => {
//    console.log('== Data Event ', chunk.length);
// });

// end 이벤트
is.on('end', () => {
   console.log('== END EVENT');
});

is.on('close', () => {
   console.log('== CLOSE EVENT');
})
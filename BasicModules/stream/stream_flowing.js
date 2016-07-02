const fs = require('fs');

//tream_flowing.js';
const file = '/Users/wannabewize/Downloads/node-v6.1.0.pkg';
const is = fs.createReadStream(file);

console.log('flowing : ', is._readableState.flowing);

is.on('readable', () => {
   console.log('== READABLE EVENT');   
});

is.on('data', chunk => {
   console.log('== DATA EVENT, size : ', chunk.length);
});

// end 이벤트
is.on('end', () => {
   console.log('== END EVENT');
});

is.on('close', () => {
   console.log('== CLOSE EVENT');
})
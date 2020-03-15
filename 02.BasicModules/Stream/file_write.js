const fs = require('fs');
const fos = fs.createWriteStream('output.txt');

fos.on('close', () => {
    console.log('close event');
});

fos.on('finish', () => {
    console.log('finish event');
});

fos.on('error', (err) => {
    console.log('error event :', err);
});

fos.write('Hello\n', () => { console.log('hello writed') });

fos.end('World\n'); 
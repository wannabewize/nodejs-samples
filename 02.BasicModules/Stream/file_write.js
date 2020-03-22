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

fos.write('Hello\n');

setTimeout(() => {
    fos.write('Stream write Example\n');
}, 1000);

setTimeout(() => {
    fos.end('bye bye\n');
}, 2000);
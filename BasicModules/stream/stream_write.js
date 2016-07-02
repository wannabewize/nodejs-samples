const fs = require('fs');
const os = fs.createWriteStream('output.txt');

os.on('error', err => {
   console.log('== ERROR EVENT]n', err);
});

os.on('finish', () => {
   console.log('== FINISH EVENT');
});

os.write('1234\n');
os.write('5678\n');

os.end('90\n');
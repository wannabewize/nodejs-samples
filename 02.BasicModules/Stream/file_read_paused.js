const fs = require('fs');

const file = 'worldmap.jpg';

const fis = fs.createReadStream(file);

let total = 0;
fis.on('readable', () => {
    console.log('읽기 준비');
    let chunk;
    while ( (chunk = fis.read(64 * 1024)) != null ) {
        total += chunk.length;
        console.log('바이트 읽기 :', chunk.length);
    }
});

fis.on('end', () => {
    console.log('읽기 끝 : ', total);
});


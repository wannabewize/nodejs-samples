const fs = require('fs');

const file = 'worldmap.jpg';

const fis = fs.createReadStream(file);
// 읽기 버퍼 크기 설정. 기본 64 * 1024
// fs.createReadStream(file, {highWaterMark: 1000});

let total = 0;
fis.on('data', (chunk) => {
    console.log('바이트 읽기 :', chunk.length)    
    total += chunk.length;
});

fis.on('end', () => {
    console.log('파일 읽기 끝 :', total);
});
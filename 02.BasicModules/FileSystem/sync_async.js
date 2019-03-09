/**
 * fs 모듈을 이용한 동기식/비동기식 API
 */
const fs = require('fs');

const text = fs.readFileSync('song.txt', 'utf-8');
console.log('file read :', text);

fs.readFile('song.txt', 'utf-8', (err, text) => {
    console.log('file read async :', text)
});

try {
    const text2 = fs.readFileSync('song2.txt', 'utf-8');
}
catch (error) {
    console.log('readFileSync Error :', error);
}
    
fs.readFile('song2.txt', 'utf-8', (err, text) => {
    if ( err ) {
        console.log('파일 읽기 에러 :', err);
    }
});
const fs = require('fs');

const file = './song.txt';

// 파일 읽기 비동기
fs.readFile(file, (err, data) => {
   console.log('== 인코딩 없이 파일 읽기, 비동기식');
   console.log(data);   
});

// 파일 읽기 비동기, with 인코딩
fs.readFile(file, 'utf8', (err, data) => {
   console.log('== UTF 8 인코딩으로 파일 읽기. 비동기식');
   console.log(data);
});

const buffer = fs.readFileSync(file);
console.log('== 인코딩 없이 파일 읽기(동기식)');
console.log(buffer);

const text = fs.readFileSync(file, 'utf-8');
console.log('== 인코딩으로 파일 읽기(동기식)');
console.log(text);
var fs = require('fs');

var file = './song.txt';

// 파일 읽기 - Buffer 반환
console.log('File Reading, w/o Encoding');
var data = fs.readFileSync(file);
console.log('data : ', data);
console.log('data(utf8) : ', data.toString('utf8'));

// 파일 읽기, 인코딩
console.log('File Reading, with Encoding');
var data2 = fs.readFileSync(file, 'utf-8');
console.log(data2);

// 바이너리 파일 읽기
var imageData = fs.readFileSync('./image.jpg');
console.log('Read Image File');
console.log(imageData);

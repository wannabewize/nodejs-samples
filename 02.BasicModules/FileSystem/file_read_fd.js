/**
 * 파일 디스크립터를 이용해서 파일 읽기
 */
const fs = require('fs');

const file = './song.txt';

// 읽기 전용으로 파일 오픈. 동기식
var fd = fs.openSync(file, 'r');
var buffer = Buffer.allocUnsafe(10);

// 파라미터 : fd, buffer, offset, length, position
var byte = fs.readSync(fd, buffer, 0, buffer.length, 0);
console.log('ReadFile ', byte, ' bytes read');
console.log('File Contenst : ', buffer.toString('utf-8'));

// 파일 디스크립터 닫기
fs.closeSync(fd);


// 파일 디스크립터 생성. 읽기 전용
fs.open(file, 'r', function(err, fd2) {
   if ( err ) {
      console.error('File open error : ', err);
      return;
   }   
   
   var buffer2 = Buffer.allocUnsafe(10);
   //파라미터 : fd, buffer, offset, length, position, callback
   fs.read(fd2, buffer2, 0, buffer2.length, 10, function(err, byteRead, buffer) {
      if ( err ) {
         console.error('File read error : ', err);
         return;
      }
      
      console.log('File Read ', byteRead, 'bytes');
      console.log('File Content : ', buffer.toString('utf-8'));
      
      
      fs.close(fd, function(err) {
         if ( err ) {
            console.error('FileDescriptor Close Error : ', err);
         }
      });      
   });   
});

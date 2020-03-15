const fs = require('fs');

// 동기식
const files = fs.readdirSync(__dirname);
console.log('디렉토리 내 파일 목록(Sync)\n', files);


// 비동기식 - 
fs.readdir(__dirname, (err, files) => {
   if ( err ) {
      console.log('디렉토리 읽기 에러', err);
      return;
   }
   console.log('디렉토리 내 파일 목록(Async)\n', files);
});


fs.readdir(__dirname + "/NonExist", (err, files) => {
   if ( err ) {
      console.log('디렉토리 읽기 에러', err);
      return;
   }
});
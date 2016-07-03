const fs = require('fs');

var path = '.';

// 동기식
const files = fs.readdirSync(path);
console.log('디렉토리 내 파일 목록(Sync)\n', files);

fs.readdir(path, (err, files) => {
   if ( err ) {
      console.errro('디렉토리 읽기 에러');
      return;
   }
   console.log('디렉토리 내 파일 목록(Async)\n', files);
});


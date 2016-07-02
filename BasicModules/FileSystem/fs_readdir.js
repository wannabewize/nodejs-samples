var fs = require('fs');

var path = '.';

// 동기식
var files = fs.readdirSync(path);
console.log('디렉토리 내 파일 목록(Sync)\n', files);

fs.readdir(path, function(err, files) {
   if ( err ) {
      console.errro('디렉토리 읽기 에러');
      return;
   }
   console.log('디렉토리 내 파일 목록(Async)\n', files);
});


// 비동기 예제 실행 후 동작하도록 1초뒤 실행. 
setTimeout(function() {
   var files2 = fs.readdirSync('nonexist');   
}, 1000);


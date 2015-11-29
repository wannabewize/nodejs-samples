var fs = require('fs');

fs.mkdir('test', function(err) {
   if ( err ) {
      console.error('mkdir error : ', err);
      return;
   }

   // 파일 하나 생성   
   fs.writeFileSync('./test/text.txt', 'Hello World');
   
   // 디렉토리 삭제 시도 - 에러 발생!
   // 동기 방식의 API는 try-catch로
   try {
      fs.rmdirSync('./test/text.txt');   
   }
   catch ( exception ) {
      console.error('rmdir exception : ', exception);
   }
});

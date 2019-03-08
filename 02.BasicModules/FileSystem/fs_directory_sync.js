const fs = require('fs');

try {
   fs.mkdirSync('test');   
   console.log('디렉토리 생성 성공');
   // 파일 하나 생성   
   fs.writeFileSync('test/text.txt', 'Hello World');
   console.log('디렉토리 내 파일 생성');   
} catch (error) {
   console.error('writeFile Error : ', error);
   // 강제 종료
   process.exit(1);
}

try {
   fs.rmdirSync('test');   
}
catch ( error ) {
   console.log('비어있지 않은 디렉토리는 삭제 못함');
}

try {
   // 디렉토리 내 파일 삭제
   fs.unlink('test/text.txt');
   console.log('파일 삭제 성공');
   
   // 디렉토리 삭제
   fs.rmdirSync('test');
   console.log('디렉토리 삭제 성공');
} catch (error) {
   console.log('Error : ', error);
}

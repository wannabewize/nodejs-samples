var fs = require('fs');

fs.writeFileSync('./textData.txt', 'Hello World');

// 버퍼로 저장
var buffer = new Buffer([10,20,30,40,50]);
fs.writeFile('./binaryData.dat', buffer, function(err) {
   if ( err ) {
      console.error('파일 저장 실패 : ', err);
      return;
   }
   console.log('파일 저장 성공');      
});

// 파일에 내용 추가
fs.appendFile('./textData.txt', '\nGood morning', function(err) {
   if ( err ) {
      console.error('파일 내용 추가 실패 : ', err);
      return;
   }
   console.log('파일 내용 추가 성공');      
});

// 파일 삭제
fs.unlink('./binaryData.dat', function(err) {
   if ( err ) {
      console.error('Delete Error : ', err);
   }
});   
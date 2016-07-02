var fs = require('fs');

// 기본 인코딩 : utf-8
fs.writeFile('./textData.txt', 'Hello World', 'utf-8', function(err) {
   if ( err ) {
      console.error('File write Errro : ', err);
      return;
   }
   console.log('파일 저장 성공');
});

// 버퍼로 저장
var buffer = new Buffer([10,20,30,40,50]);
fs.writeFile('./binaryData.dat', buffer, function(err) {
   if ( err ) {
      console.error('파일 저장 실패 : ', err);
      return;
   }
   console.log('파일 저장 성공');      
});
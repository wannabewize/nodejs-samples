var fs = require('fs');

var path1 = './textData.txt';
fs.writeFileSync(path1, 'Hello World');
fs.appendFileSync(path1, '\nGood morning');


// 비동기 방식

// 파일에 내용 추가
fs.appendFile(path1, '\nGood night', function(err) {
   if ( err ) {
      console.error('파일 내용 추가 실패 : ', err);
      return;
   }
   console.log('파일 내용 추가 성공 - 존재하는 파일');      
});


// 파일에 내용 추가
fs.appendFile('./none_exist.txt', 'None exist file appending', function(err) {
   if ( err ) {
      console.error('파일 내용 추가 실패 : ', err);
      return;
   }
   console.log('파일 내용 추가 성공 - 존재하지 않는 파일');      
});


// 파일 삭제
fs.unlink('./binaryData.dat', function(err) {
   if ( err ) {
      console.error('Delete Error : ', err);
   }
});   
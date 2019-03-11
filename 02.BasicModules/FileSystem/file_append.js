const fs = require('fs');

// 초기 내용 작성
var path1 = './textAppend.txt';
fs.writeFileSync(path1, 'Good morning');

// 비동기 방식

// 파일에 내용 추가
fs.appendFile(path1, '\nGood night', (err) => {
   if ( err ) {
      console.error('파일 내용 추가 실패 : ', err);
      return;
   }
   console.log('파일 내용 추가 성공 - 존재하는 파일');      
});


// 없는 파일에 내용 추가
fs.appendFile('./textAppend2.txt', '없는 파일에 내용 추가', (err) => {
   if ( err ) {
      console.error('파일 내용 추가 실패 : ', err);
      return;
   }
   console.log('파일 내용 추가 성공 - 존재하지 않는 파일');      
});
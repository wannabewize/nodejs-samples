var fs = require('fs');

// 동기식 API는 try~catch 를 사용해서 에러 처리
try {
   var data = fs.readFileSync('none_exist.txt', 'utf-8');
   console.log(data);
}
catch ( exception ) {
   console.error('Readfile Error : ', exception);
}


// 비동기식 API는 콜백 함수의 에러 파라미터를 사용해서 에러 처리
fs.readFile('none_exist.txt', 'utf-8', function(err, data) {
   if ( err ) {
      console.error('Readfile error ', err);
   }
   else {
      console.log(data);
   }   
});
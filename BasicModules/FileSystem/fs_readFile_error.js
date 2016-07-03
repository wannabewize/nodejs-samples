const fs = require('fs');

// 동기식 API는 try~catch 를 사용해서 에러 처리
try {
   const data = fs.readFileSync('none_exist.txt', 'utf-8');
   console.log(data);
}
catch ( error ) {
   console.error('readFileSync Error : ', error.message);
}


// 비동기식 API는 콜백 함수의 에러 파라미터를 사용해서 에러 처리
fs.readFile('none_exist.txt', 'utf-8', (err, data) => {
   if ( err ) {
      console.error('readFile error ', err.message);
   }
   else {
      console.log(data);
   }   
});
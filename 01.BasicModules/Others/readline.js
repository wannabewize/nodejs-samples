// 모듈 로딩
const readline = require('readline');

// 객체 생성 - 생성 옵션
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// 객체에서 메소드 사용
readline.cursorTo(process.stdout, 60, 30);

// 이벤트 다루기
rl.on('line', function(cmd) {
   console.log('New line event ');
});
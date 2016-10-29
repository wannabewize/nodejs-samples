
// 인풋 스트림은 콘솔
const is = process.stdin;
is.setEncoding('utf8');

// 아웃풋 스트림 - 파일
const fs = require('fs');
const os = fs.createWriteStream('output.txt');

// 파이프, 언파이프 이벤트
os.on('pipe', src => {
   console.log('== PIPE EVENT');
});

os.on('unpipe', src => {
   console.log('== UNPIPE EVENT');
});

// 콘솔 입력을 파일 출력 스트림으로 연결
is.pipe(os);

// exit 입력이 오면 파이프 연결 해제
is.on('data', data => {
   if ( data.trim() == 'exit' ) {
      is.unpipe(os);
      // 종료
      process.exit(0);
   }
});

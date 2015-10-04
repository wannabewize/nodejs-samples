var fs = require('fs');

// 인풋 스트림은 콘솔
var is = process.stdin;
is.setEncoding('utf8');

// 아웃풋 스트림
var os = fs.createWriteStream('output.txt');

// 파이프, 언파이프 이벤트
os.on('pipe', function(src) {
   console.log('pipe event');
});

os.on('unpipe', function(src) {
   console.log('unpipe event');
});

// 콘솔 입력을 파일 출력 스트림으로 연결
is.pipe(os);

// exit 입력이 오면 파이프 연결 해제
is.on('data', function(data) {
   if ( data.trim() == 'end' ) {
      is.unpipe(os);           
   }
});

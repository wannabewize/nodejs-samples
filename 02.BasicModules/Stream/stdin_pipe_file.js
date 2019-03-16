
// 인풋 스트림은 콘솔
const is = process.stdin;
is.setEncoding('utf8');

// 아웃풋 스트림 - 파일
const fs = require('fs');
const os = fs.createWriteStream('output.txt');

// 파이프, 언파이프 이벤트
os.on('pipe', (src) => {
   console.log('Writable Stream : pipe Event');
});

os.on('unpipe', (src) => {
   console.log('Writable Stream : unpipe Event');
});

os.on('close', () => {
   console.log('Writable Stream : close Event');
});

os.on('end', () => {
   console.log('Writable Stream : end Event');
});

os.on('finish', () => {
   console.log('Writable Stream : finish Event');
});

// 콘솔 입력을 파일 출력 스트림으로 연결
is.pipe(os);

is.on('end', () => {
   console.log('Readable Stream : end Event');
});

is.on('close', () => {
   console.log('Readable Stream : close Event');
});

// exit 입력이 오면 파이프 연결 해제
is.on('data', data => {
   if ( data.trim() == 'exit' ) {
      is.unpipe(os);
      os.end();
      is.destroy();
   }
});

// 콘솔에 cork를 입력하고 - output.txt에 기록되는 내용을 확인한다 uncork를 입력하고 output.txt를 확인해보자
const fs = require('fs');
const is = process.stdin;
const os = fs.createWriteStream('output.txt');

os.on('error', err => {
   console.log('== ERROR EVENT]n', err);
});

os.on('finish', () => {
   console.log('== FINISH EVENT');
});

is.on('data', chunk => {
   const input = chunk.toString().trim();
   if ( input == 'cork' ) {
      os.cork();
   }
   else if ( input == 'uncork' ) {
      os.uncork();
   }
   else if ( input == 'exit' ) {
      is.end();
      os.end();
   }
   else {
      os.write(input);
   }
});
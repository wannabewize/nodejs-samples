// 콘솔 입력
const is = process.stdin;
// 콘솔 출력
const os = process.stdout;

is.setEncoding('utf8');

var count = 0;
is.on('data', data => {
   os.write('data event : ' + data);
   count++;
   if ( count > 10 ) {
      is.end('finish!');
   }
});

is.on('readable', () => {
   os.write('readable event\n');
});

os.on('finish', ()=>{
   console.log('Output Stream Finished');
});

// 콘솔 입력
var is = process.stdin;
// 콘솔 출력
var os = process.stdout;

is.setEncoding('utf8');

is.on('data', function (data) {
   os.write('data event : ' + data);

});

// is.on('readable', function () {
//    os.write('readable event\n');
// });


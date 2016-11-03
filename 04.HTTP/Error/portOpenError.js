/*
 * 이미 사용중인 포트로 서버를 시작하려고 할때
 * */

const http = require('http');
// 1024보다 작은 포트로도 테스트
var port = 3000;

// 서버 시작
http.createServer().listen(port, err => {
    console.log('Server1 is listening @', port);
});


var server = http.createServer();

// 에러 이벤트
//server.on('error', function (err) {
//    console.log('Error Event : ', err.message);
//});

// 같은 포트로 서버 시작
server.listen(port, function (err) {
    console.log('Server2 시작. port : ', port);
    if (err) {
        // 포트 에러는 여기서 잡히지 않는다.
        console.log('Listen Error : ', err.message);
        return;
    }
    console.log('Server2 is listening @ 3000');
});
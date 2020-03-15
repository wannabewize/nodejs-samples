/*
 * 이미 사용중인 포트로 서버를 시작하려고 할때
 * */

const http = require('http');
// 1024보다 작은 포트로도 테스트
const port = 3000;

// 서버 시작
http.createServer().listen(port, () => {
    console.log('Server1 is listening @', port);
});

// 같은 포트로 서버 시작
http.createServer().listen(port, () => {
    console.log('Server2 is listening @ 3000');
});
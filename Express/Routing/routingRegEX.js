var express = require('express');
var app = express();
app.listen(3000, function () {
   console.log('Server is listening @3000');
});

// b는 옵셔널 /abcd, /acd
app.get('/ab?cd', function (req, res) {
   res.send('ab?cd');
});

// +는 1번 이상의 반복이다. abcd, abbcd, abbbcd 등의 매칭된다.
app.get('/ab+cd', function (req, res) {
   res.send('ab+cd');
});

// *는 임의의 문자가 0번 이상 포함될 수 있다. abcd, abxcd, abRABDOMcd, ab123cd 등의 매칭된다.
app.get('/ab*cd', function (req, res) {
   res.send('ab*cd');
});

// 괄호()를 이용해서 그룹으로 묶을 수 있다. ?에 의해서 /abe와  /abcde에 매칭된다.
app.get('/ab(cd)?e', function (req, res) {
   res.send('ab(cd)?e');
});

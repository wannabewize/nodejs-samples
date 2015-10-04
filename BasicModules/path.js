var pathUtil = require('path');

console.log('filename : ', __filename);
console.log('dirname : ', __dirname);

// normalize : 경로 가다듬기
var normalizePath = pathUtil.normalize('/user/tmp/../local///bin/');
console.log('normalize : ', normalizePath);

console.log('dirname : ', pathUtil.dirname(normalizePath));
console.log('basename : ', pathUtil.basename(normalizePath, 'html'));

// Parse
var parsed = pathUtil.parse(__filename);
console.log('parsed : ', parsed);
console.log('parsed.ext : ', parsed.ext);


// 경로 덧붙이기
var joined = pathUtil.join('/tp/login/', 'game');
console.log('join : ', joined);

// 경로 만들기
var path = pathUtil.format({
    root : "/",
    dir : "/home/user/dir",
    base : "file.txt",
    ext : ".txt",
    name : "file"
});
console.log('formatted : ', path);

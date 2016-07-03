const pathUtil = require('path');

console.log('filename : ', __filename);
console.log('dirname : ', __dirname);

// normalize : 경로 가다듬기
const normalizePath = pathUtil.normalize('/user/tmp/../local///bin/');
console.log('normalize : ', normalizePath);

console.log('dirname : ', pathUtil.dirname(normalizePath));
console.log('basename : ', pathUtil.basename(normalizePath, 'html'));

const pathStr = '/foo/bar/baz/asdf/quux.html';
console.log('== Path Str : ', pathStr);
console.log('dirname : ', pathUtil.dirname(pathStr) );
console.log( 'basename : ',  pathUtil.basename(pathStr) ); // ‘quux.html'
console.log( 'extname : ', pathUtil.extname(pathStr) );

// Parse
const parsed = pathUtil.parse(__filename);
console.log('parsed : ', parsed);
console.log('parsed.ext : ', parsed.ext);

// 경로 덧붙이기
const joined = pathUtil.join('/tp/login/', 'game');
console.log('join : ', joined);

const pathStr2 = __dirname + pathUtil.sep + 'image.png';
console.log('Path making : ',pathStr2);

// 경로 만들기
const path = pathUtil.format({
    root : "/",
    dir : "/home/user/dir",
    base : "file.txt",
    ext : ".txt",
    name : "file"
});
console.log('formatted : ', path);

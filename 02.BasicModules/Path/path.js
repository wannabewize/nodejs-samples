const pathUtil = require('path');

console.log("== Node.js 애플리케이션 실행 폴더")

console.log('path : ', __dirname);
console.log('dirname : ', pathUtil.dirname(__dirname) );
console.log('basename : ',  pathUtil.basename(__dirname) );
console.log('extname : ', pathUtil.extname(__dirname), ', == "" : ', pathUtil.extname(__dirname) == "" );

console.log('== 경로에서 상세 정보 얻기');
const imagePath = __dirname + pathUtil.sep + 'image.png';
console.log('path :', imagePath);
console.log('dirname : ', pathUtil.dirname(imagePath) );
console.log('basename : ',  pathUtil.basename(imagePath) ); // image.png
console.log('extname : ', pathUtil.extname(imagePath) ); // .png

console.log('== 경로에서 상세 정보 얻기2')
var filePath = '/foo/bar/baz/asdf/quux.html';
console.log('filePath :', filePath);
console.log('dirname :', pathUtil.dirname(filePath)); 	// /foo/bar/baz/asdf
console.log('basename :', pathUtil.basename(filePath)); // ‘quux.html'
console.log('extname :', pathUtil.extname(filePath)); 	// .html


// normalize : 경로 가다듬기
console.log('== 경로 가듬기. normalize');
const dirthPath = '/user/tmp/../local///bin/';
console.log('path :', dirthPath)
const normalizePath = pathUtil.normalize(dirthPath);
console.log('normalize : ', normalizePath);

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

var fs = require('fs');

var buf1 = fs.readFileSync('1.png');
var buf2 = fs.readFileSync('2.png');

var buffer = Buffer.concat([buf1, buf2], buf1.length + buf2.length);

fs.writeFileSync('total.png', buffer);

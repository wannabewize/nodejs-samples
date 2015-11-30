var fs = require('fs');


var os = fs.createWriteStream('output.txt');

os.on('error', function(err) {
   console.log('== ERROR EVENT]n', err);
});

os.on('finish', function() {
   console.log('== FINISH EVENT');
});

os.write('1234\n');
os.write('5678\n');

os.end('90\n');
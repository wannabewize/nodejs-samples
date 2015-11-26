var fs = require('fs');

fs.readFile('./fs3.js', function(err, data) {
   console.log('Read Text File');
   console.log(data);   
});

fs.readFile('./fs3.js', 'UTF-8', function(err, data) {
   console.log('Read Text File, UTF-8 Encoding');
   console.log(data);   
})


var imageData = fs.readFileSync('./image.jpg');
console.log('Read Image File');
console.log(imageData);



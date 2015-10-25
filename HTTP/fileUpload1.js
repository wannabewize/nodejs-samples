var http = require('http');
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');

// 업로드 된 파일 경로
var uploadDir = __dirname + '/files';

try {
   fs.accessSync(uploadDir, fs.W_OK);
   console.log('files 폴더 확인');
}
catch ( err ) {
   console.log('files 폴더를 생성하세요');
   process.exit();
}

var server = http.createServer(function (req, res) {
   if (req.method.toLowerCase() == 'post') {
      handlePostRequest(req, res);
   }
});

function handlePostRequest(req, res) {
   var form = new formidable.IncomingForm();
   form.encoding = 'utf-8';
   form.keepExtension = true;
   form.uploadDir = uploadDir;

   form.parse(req, function (err, fields, files) {
      // 에러
      if (err) {
         console.log('error : ' + err);
         res.statusCode = 404;
         res.end();
      }
      else {
         for ( var key in files ) {
            var file = files[key];
            console.log('== Upload File ==');
            // console.log(file);
            console.log('Key : ', key);
            console.log('path : ', file.path);
            console.log('name : ', file.name);
            console.log('type : ', file.type);
            console.log('size : ', file.size);
         }
         res.end('success');
      }
   });   
}

server.listen(3001, function() {
   console.log('Server is running on 3001');   
});

var http = require('http');
var formidable = require('formidable');

// 업로드 파일 폴더 확인
var fs = require('fs');
var uploadDir = __dirname + '/upload';
try {
   fs.accessSync(uploadDir, fs.W_OK);
   console.log('upload 폴더 확인');
}
catch ( err ) {
   console.log('upload 폴더를 생성하세요');
   process.exit();
}

var server = http.createServer(function (req, res) {

   if (req.method.toLowerCase() == 'post') {
      const contentType = req.headers['content-type'];
      if ( contentType.search('multipart') >= 0) {
         handleMultipartRequest(req, res);
      }
      else {
         res.end('멀티파트 요청 아님');
      }
   }
   else {
      res.end('Post 요청 아님');
   }
});

server.listen(3000, function() {
   console.log('Server is running on 3000');   
});

function handleMultipartRequest(req, res) {
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
         return;
      }
      console.log('== Fields ==');
      for ( var key in fields ) {
         console.log('Field name : ', key, ' value : ', fields[key]);
      }

      console.log('== Files ==');
      for ( var key in files ) {
         var file = files[key];
         // console.log(file);
         console.log('Key : ', key);
         console.log('path : ', file.path);
         console.log('name : ', file.name);
         console.log('type : ', file.type);
         console.log('size : ', file.size);
      }
      res.end(JSON.stringify({fields : fields, files : files}));
   });
}

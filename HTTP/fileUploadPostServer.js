var http = require('http');
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');

// 업로드 된 파일 목록
var uploads = [];
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
      console.log('==Request==');

      var form = new formidable.IncomingForm();
      form.encoding = 'utf-8';
      form.uploadDir = uploadDir;

      form.parse(req, function (err, fields, files) {
         // 에러
         if (err) {
            console.log('error : ' + err);
            res.statusCode = 404;
            res.end();
         }
         else {
            // 제목
            var upload = { title: fields['title'] };				
            // 실제 파일 업로드가 없어도 files는 있다.
            if (files['file'] && files['file'].size > 0) {
               var path = files['file']['path'];
               var url = path.slice(uploadDir.length - 5, path.length);
               upload['url'] = url;
               console.log('url : ' + url);
            }
				
            // console.log('==upload==\n' + upload.url);
            uploads.push(upload);
				
            // PRG 패턴
            res.statusCode = 302;
            res.setHeader('Location', 'list');
            res.end('success');
         }
      });
   }
   // <img> 태그로 인한 이미지 요청
   else if (req.method.toLowerCase() == 'get' && req.url.indexOf('/files') == 0) {
      var path = __dirname + req.url;
      res.writeHead(200, { 'Content-Type': 'image/jpeg' })
      fs.createReadStream(path).pipe(res);
   }
   else if (req.method.toLowerCase() == 'get') {
      showList(res);
   }
});



function showList(res) {
   res.writeHeader(200, { 'content-type': 'text/html' });

   var body = '<html>';
   body += '<body>';
   body += '<h3>Favorite Paint</h3>';

   body += '<ul>';
   uploads.forEach(function (data, index) {
      body += '<li>';
      if (data.url) {
         body += '<img src="' + data.url + '" style="height:100pt"></img>';
      }
      body += data.title;
      body += '</li>';
   });
   body += '</ul>';

   body += '<form action="." enctype="multipart/form-data" method="post">' +
   '<div><label>작품 이름 : </label><input type="text" name="title"></div>' +
   '<div><input type="file" name="file" value="작품 파일 선택"></div>' +
   '<input type="submit" value="upload">' +
   '</form>';
   body += '</body></html>';

   res.end(body);
}

server.listen(3002);
console.log('Server is running on 3002');
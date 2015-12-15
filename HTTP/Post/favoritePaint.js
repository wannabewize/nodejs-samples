var fs = require('fs');
var pathUtil = require('path');

// 업로드 된 파일 경로
var uploadDir = __dirname + '/upload';

try {
   fs.accessSync(uploadDir, fs.W_OK);
   console.log('upload 폴더 확인');
}
catch (err) {
   console.log('upload 폴더를 생성하세요');
   process.exit();
}

// 이미지 파일 경로
var imageDir = __dirname + '/image';
try {
   fs.accessSync(imageDir, fs.W_OK);
   console.log('image 폴더 확인');
}
catch (err) {
   console.log('image 폴더를 생성하세요');
   process.exit();
}

var http = require('http');
var formidable = require('formidable');

// 업로드 된 데이터 목록
var paintList = [];

var server = http.createServer(function (req, res) {
   // 루트 경로로 요청
   if (req.url == '/' && req.method.toLowerCase() == 'get') {
      showList(res);
   }
   // 업로드 요청
   else if (req.method.toLowerCase() == 'post') {
      var form = new formidable.IncomingForm();
      form.encoding = 'utf-8';
      form.uploadDir = uploadDir;

      form.parse(req, function (err, fields, files) {
         // 에러
         if (err) {
            console.log('error : ' + err);
            res.statusCode = 500;
            res.end();
            return;
         }
         
         // 업로드한 정보
         var info = {};
         
         // 제목
         var title = fields.title;
         info.title = title;         
                  
         // 업로드 한 이미지 중 image 이름
         var image = files.image;
         // 파일이 없어도 필드로는 존재
         if (image && image.size > 0) {            
            // 확장자
            var ext = pathUtil.parse(image.name).ext;
            console.log('poster path : ', image.path, ext);
            
            // 새로운 파일 이름 생성
            var date = new Date();
            var newImageName = 'image_' + date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getMonth() + date.getSeconds();
            var newPath = __dirname + '/image/' + newImageName + ext;

            console.log('poster new path : ', newPath);
            fs.renameSync(image.path, newPath);
            
            // poster 프로퍼티로 이미지 URL 저장
            var url = 'image/' + newImageName + ext;
            info.image = url;
         }
         
         // 정보 저장
         //console.log(info);
         paintList.push(info);
         
         // PRG 패턴, Root로 이동
         res.statusCode = 302;
         res.setHeader('Location', '/');
         res.end('success');
      });
   }
   // <img> 태그로 인한 이미지 요청
   else if (req.method.toLowerCase() == 'get' && req.url.indexOf('/image') == 0) {
      var path = __dirname + req.url;
      res.writeHead(200, { 'Content-Type': 'image/jpeg' })
      fs.createReadStream(path).pipe(res);
   }
});

function showList(res) {
   res.writeHeader(200, { 'content-type': 'text/html' });

   var body = '<html>';
   body += '<head><meta charset="UTF-8"></head>';
   body += '<body>';
   body += '<h3>Favorite Paint</h3>';

   body += '<ul>';
   paintList.forEach(function (item, index) {
      body += '<li>';
      if (item.image) {
         body += '<img src="' + item.image + '" style="height:100pt"></img>';
      }
      body += item.title;
      body += '</li>';
   });
   body += '</ul>';

   body += '<form action="." enctype="multipart/form-data" method="post">' +
   '<div><label>작품 이름 : </label><input type="text" name="title"></div>' +
   '<div><label>작품 이미지 : </label><input type="file" name="image" value="작품 파일 선택"></div>' +
   '<input type="submit" value="upload">' +
   '</form>';
   body += '</body></html>';

   res.end(body);
}

server.listen(3000, function () {
   console.log('Server is running on 3000');
});

const fs = require('fs');
const pathUtil = require('path');

// 업로드 된 파일 경로
const uploadDir = __dirname + '/upload';

try {
   fs.accessSync(uploadDir, fs.W_OK);
   console.log('upload 폴더 확인');
}
catch (err) {
   console.log('upload 폴더를 생성하세요');
   process.exit();
}

// 이미지 파일 경로
const imageDir = __dirname + '/images';
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
      handleListRequest(res);
   }
   // 업로드 요청
   else if (req.method.toLowerCase() == 'post') {
      const contentType = req.headers['content-type'];
      if (contentType.search('multipart') >= 0) {
         handleMultipartRequest(req, res);
      }
      else {
         // 요청 에러
         res.statusCode = 400;
         res.end('멀티파트 요청 아님');
      }
   }
   // <img> 태그로 인한 이미지 파일 요청
   else if (req.method.toLowerCase() == 'get' && req.url.indexOf('/images') == 0) {
      var path = __dirname + req.url;
      res.writeHead(200, { 'Content-Type': 'image/jpeg' })
      fs.createReadStream(path).pipe(res);
   }
});

function handleMultipartRequest(req, res) {
   var form = new formidable.IncomingForm();
   form.encoding = 'utf-8';
   form.uploadDir = uploadDir;

   form.parse(req, function (err, fields, files) {
      // 에러
      if (err) {
         res.statusCode = 500;
         res.end(err.message);
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
         var newPath = imageDir + pathUtil.sep + newImageName + ext;

         // 임시 폴더에서 이미지 폴더로 이동. 이름 변경
         console.log('poster new path : ', newPath);
         fs.renameSync(image.path, newPath);

         // poster 프로퍼티로 이미지 URL 저장
         var url = 'images/' + newImageName + ext;
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

function handleListRequest(res) {
   res.writeHeader(200, { 'content-type': 'text/html' });

   var body = '<html>';
   body += '<head><meta charset="UTF-8"></head>';
   body += '<body>';
   body += '<h3>Favorite Paint</h3>';

   body += '<ul>';
   for(var item of paintList) {
      body += '<li>';
      if (item.image) {
         body += '<img src="' + item.image + '" style="height:100pt"></img>';
      }
      body += item.title;
      body += '</li>';
   }
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

const http = require('http');
const {IncomingForm} = require('formidable');

// 업로드 파일 폴더 확인
const fs = require('fs');
const uploadDir = __dirname + '/upload';
try {
   fs.accessSync(uploadDir, fs.W_OK);
}
catch ( err ) {
   console.log('upload 폴더 생성');
   fs.mkdirSync('upload');
}

const server = http.createServer( (req, res) => {

   if (req.method.toLowerCase() == 'post') {
      const contentType = req.headers['content-type'];
      if ( contentType.startsWith('multipart/form-data') ) {
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
   const form = new IncomingForm();
   form.encoding = 'utf8';
   // 확장자 유지
   form.keepExtension = true;
   // 임시 업로드 폴더 설정
   form.uploadDir = uploadDir;

   form.parse(req, (err, fields, files) => {
      // 에러
      if (err) {
         console.log('error : ' + err);
         res.statusCode = 404;
         res.end();
         return;
      }
      console.log('title :', fields['title']);
      console.log('director :', fields['director']);
      const posterFile = files['poster'];
      console.log('poster file path :', posterFile.path);
      console.log('poster file name :', posterFile.name);
      console.log('poster file type :', posterFile.type);

      // console.log('== Fields ==');
      // for ( var key in fields ) {
      //    console.log('Field name : ', key, ' value : ', fields[key]);
      // }

      // console.log('== Files ==');
      // for ( var key in files ) {
      //    var file = files[key];
      //    // console.log(file);
      //    console.log('Key : ', key);
      //    console.log('path : ', file.path);
      //    console.log('name : ', file.name);
      //    console.log('type : ', file.type);
      //    console.log('size : ', file.size);
      // }

      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({fields : fields, files : files}));
   });
}

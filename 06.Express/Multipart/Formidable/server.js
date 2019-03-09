/**
 * Express-formidable을 사용해서 멀티파트 요청 다루기
 */

const uploadDir = "upload";
const imageDir = "images";

const fs = require('fs');
try {
   fs.accessSync(uploadDir);
   fs.accessSync('images');
}
catch (error) {
   console.log('Make upload, images folder');
   process.exit();
}

const express = require('express');
const formidable = require('express-formidable');
const pathUtil = require('path');
const app = express();

var data = [];

// public 경로로 정적 파일 요청 : html, js 등
app.use(express.static('public'));
// 이미지 요청 : image/iu.jpg -> images/iu.jpg
app.use('/image',express.static('images'));
app.use(express.static('public'));

app.use(formidable({
   uploadDir : uploadDir,
   keepExtension : true,
   multiples : true // 같은 이름으로 파일이 다수 전달되면 배열로 파싱
}));

app.post('/upload', (req, res) => {
   // file 업로드 시 image로 전달
   console.log('==body==\n',req.body);
   const imageFile = req.files.image;
   const text = req.fields.text;
   if ( !imageFile || !text ) {
      res.sendStatus(400);
      return;
   }

   // 파일 정보 출력
   console.log('path : ', imageFile.path);
   console.log('name : ', imageFile.name);
   console.log('type : ', imageFile.type);
   console.log('size : ', imageFile.size);

   // 새로운 이름 생성
   const ext = pathUtil.extname(imageFile.name); // 원본 파일의 확장자 얻기
   const now = new Date();
   const newName = 'image_' + now.getHours() + now.getMinutes() + now.getSeconds() + ext;
   console.log('new name : ', newName);
   
   // 이미지 폴더로 이동
   const newPath = imageDir + '/' + newName;    
   console.log('New path :', newPath);
   fs.rename(imageFile.path, newPath, (err) => {
      if ( err ) {
         console.log('Error : ', err);
         res.sendStatus(500);
         return;
      }
      // 경로
      const imageUrl = 'image/' + newName;
      const info = {
         text : text,         
         image : imageUrl 
      };
      data.push(info);
      res.sendStatus(200);
   })
});

app.get('/list', (req, res) => {
   res.send({count:data.length, data : data});
});

app.listen(3000, err => {
   console.log('Server is running @ 3000');
});
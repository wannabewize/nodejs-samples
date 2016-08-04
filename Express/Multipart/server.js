const fs = require('fs');
try {
   fs.accessSync('upload');
   fs.accessSync('public/images');
}
catch (error) {
   console.log('Make upload, public/images folder');
   process.exit();
}

const express = require('express');
const formidable = require('express-formidable');
const pathUtil = require('path');
const app = express();

var data = [];

// public 경로로 정적 파일 요청
app.use(express.static('public'));

app.use(formidable.parse({
   uploadDir : 'upload',
   keepExtension : true,
   multiples : true // 같은 이름으로 파일이 다수 전달되면 배열로 파싱
}));

app.post('/upload', (req, res) => {
   // file 업로드 시 image로 전달
   const imageFile = req.body.image;
   const text = req.body.text;
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
   const newPath = 'public/images/' + newName;    
   fs.rename(imageFile.path, newPath, (err) => {
      if ( err ) {
         console.log('Error : ', err);
         res.sendStatus(500);
         return;
      }

      const info = {
         text : text,
         image : '/images/' + newName
      };
      data.push(info);
      res.sendStatus(200);
   })
});

app.get('/list', (req, res) => {
   res.send({count:data.length, data : data});
});

app.get('/', (req, res) => {   
   res.send('public/index.html');
});


app.listen(3000, err => {
   console.log('Server is running @ 3000');
});


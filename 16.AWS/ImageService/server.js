const express = require('express');
const formidable = require('formidable');
const async = require('async');
const easyimage = require('easyimage');
const pathUtil = require('path');
const fs = require('fs');

const app = express();

app.use(express.static('./public'));

app.get('./favocon.ico', (req, res) => {res.send('');});

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});


const uploadDir = './upload/';

app.post('/upload', (req, res, next) => {
   const form = new formidable.IncomingForm();
   form.uploadDir = uploadDir;
   form.keepExtensions = true;

   async.waterfall([
       // Body parsing
      (done) => {
         form.parse(req, (err, fields, files) => {
            if ( err ) {
               return done(err);
            }

            // 멀티 파트 바디 메세지
            const title = fields['title'];
            const imageFile = files['image'];

            // 새로운 파일 이름 생성
            const now = new Date();
            const ext = pathUtil.extname(imageFile.path);
            const fileName = 'image_' + now.getHours() + now.getMinutes() + now.getSeconds() + ext;
            const thumbnailName = 'thumbnail_' + now.getHours() + now.getMinutes() + now.getSeconds() + ext;

            // 업로드 된 파일 이름 변경 - 나중에 삭제가 쉽도록
            fs.renameSync(imageFile.path, uploadDir + fileName);

            // 썸네일 생성
            easyimage.thumbnail({
               src : uploadDir + fileName,
               dst : uploadDir + thumbnailName,
               width : 100
            })
            .then( result => {
               console.log('thumbnail make success');
               done(null, title, fileName, thumbnailName);
            }, error => {
               done(error);
            });
         });
      },
      (title, fileName, thumbnailName, done) => {
         // s3 파일 업로드
         // DB에 파일 저장
         console.log('File upload to S3 : ', fileName, thumbnailName);
         console.log('Database save : ', title);
         done(null, fileName, thumbnailName);
      },
      (fileName, thumbanilName, done) => {
         // File 삭제
         fs.unlink(uploadDir + fileName, error=> {
            if (error)
               return done(error);
            fs.unlink(uploadDir + thumbanilName, error => {
               if (error)
                  return done(error);
               done(null);
            });
         });
      }
   ], (err) => {
      if ( err ) {
         return next(err);
      }

      res.sendStatus(200);
   });
});

app.use((err, req, res, next) => {
   console.log('Error : ', err);
   res.status(500).send({error : err.message});
});

app.listen(3000);
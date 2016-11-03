var formidable = require('formidable');
var express = require('express');
var fs = require('fs');
var pathUtil = require('path');
var easyimg = require('easyimage');
var async = require('async');

var uploadDir = __dirname + '/upload';
var thumbnailDir = __dirname + '/thumbnail';

if (!(fs.existsSync(uploadDir) && fs.existsSync(thumbnailDir))) {
   console.error('upload, thumbnail 폴더 없음!');
   process.exit();
}

// 이미지 파일 목록
var resources = [];

var AWS = require('aws-sdk');
const config = require('./s3config.js');

AWS.config.region = config.region;
AWS.config.accessKeyId = config.accessKeyId;
AWS.config.secretAccessKey = config.secretAccessKey;

// Listup All Files
var s3 = new AWS.S3();

var bucketName = 'movies-example-posters';

var app = express();
app.post('/', uploadImage);
app.get('/', showImages);

function uploadImage(req, res) {
   async.waterfall(
      [
         // 바디 파싱
         function (callback) {
            var form = new formidable.IncomingForm();
            form.encoding = 'utf-8';
            form.uploadDir = uploadDir;
            form.multiples = true;
            form.keepExtensions = true;
            form.parse(req, function (err, fields, files) {
               if ( err ) {
                  return callback(err, null);
               }
               
               var title = fields.title;
               // 임시 폴더로 업로드된 파일
               var file = files.file;
               callback(null, title, file);
            });
         },
         // 썸네일 생성
         function(title, file, callback) {            
            var fileName = file.name;
            var filePath = file.path;
            var thumbnailFilePath = thumbnailDir + pathUtil.sep + fileName;
            
            // 임시 파일에서 썸네일 생성		
            easyimg.thumbnail({
               src:filePath,
               dst:thumbnailFilePath,
               width:100
            }).then(function(image){
               console.log('thumbnail created : ', image);
                              
               callback(null, title, file, thumbnailFilePath);
            }, function(err) {						
               console.error('Thumbanil Create Error', err);
               callback(err);
            });					            
         },
         // S3에 이미지 업데이트
         function(title, file, thumbnailFilePath, callback) {
            var contentType = file.type;
            
            var readStream = fs.createReadStream(file.path);
            
            // 버킷 내 객체 키 생성
            var itemKey = 'poster/' + newFileName + extname;
            
            var params = {
               Bucket: bucketName, // 필수
               Key: itemKey,					// 필수
               ACL: 'public-read',
               Body: readStream,
               ContentType:contentType
            }
            s3.putObject(params, function(err, data) {
               if ( err ) {
                  console.error('S3 PutObject Error', err);
                  callback(err, null);
               }
               else {
                  // 접근 경로 - 2가지 방법
                  var imageUrl = s3.endpoint.href + bucketName  + '/' + itemKey;
                  var imageSignedUrl = s3.getSignedUrl('getObject', {Bucket: bucketName, Key: itemKey});
                  callback(null, imageUrl);							
               }
            });	              
         }
         function(callback) {
               // EC2에서 이미지 삭제
         }
      ],
      function (err) {
         if (err) {
            res.sendStatus(500);
         }
         else {
            res.redirect('./');
         }
      }
      );
}

function showImages(req, res) {
   var body = '<html><body>';

   body += '<h3>File List</h3>';
   body += '<ul>';
   for (var i = 0; i < resources.length; i++) {
      var item = resources[i];
      body += '<li>' + '<img src="' + item.thumbnail + '">' + item.title + '</li>';
   }
   body += '</ul>';
   body += '<form method="post" action="/" enctype="multipart/form-data">';
   body += '<input type="text" name="title"><li>';
   body += '<input type="file" name="file"><li>';
   body += '<input type="submit" value="Uplaod"><li>';
   body += '</form>';

   res.send(body);
}
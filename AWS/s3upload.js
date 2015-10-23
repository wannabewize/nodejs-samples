var fs = require('fs');
var pathUtil = require('path');

var AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-1';
AWS.config.accessKeyId = 'ACCESS_KEY';
AWS.config.secretAccessKey = 'SECRET_ACCESS_KEY'

// 파일 스트림 생성 - 폴더에 파일 저장하고 사용
var file = './image.jpg';
var readStream = fs.createReadStream(file);

// 버킷 이름
var bucketName = 'movies-example-posters';
// 버킷 내 객체 키 생성
var extname = pathUtil.extname(file); // 확장자
var now = new Date(); // 날짜를 이용한 파일 이름 생성
var itemKey = 'poster/' + now.getHours() + now.getMinutes() + now.getSeconds() + Math.floor(Math.random()*1000) + extname;
var contentType = 'image/jpg'; // TODO : 파일에 따라서 컨텐츠 타입 설정

var params = {
   Bucket: bucketName,  // 필수
   Key: itemKey,			// 필수
   ACL: 'public-read',
   Body: readStream,
   ContentType: contentType
}

// s3 - Upload
var s3 = new AWS.S3();
s3.putObject(params, function (err, data) {
   if (err) {
      console.error('S3 PutObject Error', err);
      throw err;
   }
   // 접근 경로 - 2가지 방법
   var imageUrl = s3.endpoint.href + bucketName + '/' + itemKey; // http, https
   console.log('Image Upload Success : ', imageUrl);
});
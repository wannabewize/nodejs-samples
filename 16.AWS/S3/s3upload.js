const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.region = 'S3 경로 중 region 부분 입력';
AWS.config.accessKeyId = 'ACCESS-KEY-ID';
AWS.config.secretAccessKey = 'ACCESS-KEY';

// 파일 스트림 생성 - 폴더에 파일 저장하고 사용
const file = './image.jpg';
const readStream = fs.createReadStream(file);

// 버킷 이름
const bucketName = 's3-examples';
// 객체 키
const itemKey = 'image.jpg';
// 컨텐트 타입
const contentType = 'image/jpg';
 
const params = {
   Bucket: bucketName,  // 필수
   Key: itemKey,			// 필수
   ACL: 'public-read',
   Body: readStream,
   ContentType: contentType
}

// s3 - Upload
const s3 = new AWS.S3();

s3.putObject(params, function (err, data) {
   if (err) {
      console.error('S3 PutObject Error', err);
      throw err;
   }
   // 접근 경로
   var imageUrl = s3.endpoint.href + bucketName + '/' + itemKey; // http, https
   console.log('File Upload Success : ', imageUrl);
});
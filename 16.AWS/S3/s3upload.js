const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.loadFromPath('./aws_config.json');

// 파일 스트림 생성 - 폴더에 파일 저장하고 사용
const file = './image.jpg';
const readStream = fs.createReadStream(file);

// 버킷 이름
const bucketName = 'idu-s3-example';
// S3에 저장되는 객체 키 - 임의의 이름 만들기(시분초) + 난수 + 확장자
const now = new Date()
const itemKey = 'upload/' + now.getHours() + now.getMinutes() + now.getSeconds() + Math.floor(Math.random() * 1000) + '.jpg';
// 컨텐트 타입
const contentType = 'image/jpeg';

const params = {
   Bucket: bucketName,  // 필수
   Key: itemKey,			// 필수
   ACL: 'public-read',
   Body: readStream,
   ContentType: contentType
}

// s3 - Upload
const s3 = new AWS.S3();

s3.upload(params, (err, ret) => {
   if (err) {
      console.error('S3 upload Error', err);
      throw err;
   }

   let url = ret.Location;
   console.log('URL :', url);
});
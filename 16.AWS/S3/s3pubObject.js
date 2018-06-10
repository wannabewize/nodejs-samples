const AWS = require('aws-sdk');
const fs = require('fs');

// ~/.aws/credential 작성. https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-nodejs.html
var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;

// 파일 스트림 생성 - 폴더에 파일 저장하고 사용
const file = './image.jpg';
const readStream = fs.readFileSync(file);
//기본 API로 스트림 방식은 안된다???!!
//fs.createReadStream(file);

// 버킷 이름
const bucketName = 's3-examples';
// S3에 저장되는 객체 키 - 임의의 이름 만들기(시분초) + 난수 + 확장자
const now = new Date()
const itemKey = '/upload/' + now.getHours() + now.getMinutes() + now.getSeconds() + Math.floor(Math.random()*1000) + '.jpg';
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

s3.putObject(params, (err, data) => {
   if (err) {
      console.error('S3 PutObject Error', err);
      throw err;
   }
   console.log('data ; ', data);
   // 접근 경로
   var imageUrl = s3.endpoint.href + bucketName + itemKey; // http, https
   console.log('File Upload Success : ', imageUrl);
});
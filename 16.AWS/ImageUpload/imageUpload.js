const s3Util = require('./s3uploadModule');
const pathUtil = require('path');

const filePath = './iu1.jpg';

// File Info
const param = {
    filePath : filePath,
    contentType : 'image/jpg'
};

//
// S3 객체 설정

// 버킷 내 객체 키 생성
const extname = pathUtil.extname(filePath); // 확장자
const now = new Date(); // 날짜를 이용한 파일 이름 생성
const itemKey = 'upload/' + now.getHours() + now.getMinutes() + now.getSeconds() + Math.floor(Math.random()*1000) + extname;
console.log('s3 item key : ', itemKey);

s3Util.uploadFile(param, itemKey, (err, result) => {
    if ( err ) {
        console.error('image upload error :', err);
    }
    else {
        console.log('image upload success :', result);
    }
});
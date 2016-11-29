const s3Util = require('./s3uploadModule2');
const pathUtil = require('path');
const async = require('async');

// uploadSingle();
uploadMulti();

function createRandomKey(filePath) {
    const extname = pathUtil.extname(filePath); // 확장자
    const now = new Date(); // 날짜를 이용한 파일 이름 생성
    const randomKey = 'image_' + now.getHours() + now.getMinutes() + now.getSeconds() + Math.floor(Math.random()*1000) + extname;
    return randomKey;
}

function uploadSingle() {
    // File Info
    const filePath = './image.jpg';

    const param = {
        filePath : filePath,
        contentType : 'image/jpg'
    };

    // 버킷 내 객체 키 생성
    const randomKey = createRandomKey(filePath);
    console.log('random item key : ', randomKey);

    // S3 Key
    const s3Param = {
        itemKey: 'image/' + randomKey,
        thumbnailKey: 'thumbnail/' + randomKey
    };

    s3Util.uploadImage(param, s3Param, (err, result) => {
        if (err) {
            console.error('image upload error :', err);
        }
        else {
            console.log('image upload success :', result);
        }
    });
}

function uploadMulti() {
    const files = [
        { filePath : './image1.jpg', contentType : 'image/jpg' },
        { filePath : './image2.jpg', contentType : 'image/jpg' }
    ];

    async.map(files, (file, callback) => {
        const itemKey = createRandomKey(file.filePath);
        const s3param = {
            itemKey : 'image/' + itemKey,
            thumbnailKey : 'thumbnail/' + itemKey
        };
        s3Util.uploadImage(file, s3param, (err, result) => {
            if ( err ) {
                return callback(err);
            }
            callback(null, result);
        });
    }, (err, results) => {
        if ( err ) {
            console.log('Multifile upload error:', err);
        }
        else {
            console.log('Multifile upload success :', results);
        }
    });
}

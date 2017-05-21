//
// 이미지 업로드, 썸네일 생성과 S3 이동 예제
// 썸네일 생성을 위해서는 ImageMagick 설치
//

// thunbnail 폴더 없으면 종료!
const fs = require('fs');
if ( ! fs.existsSync('thumbnail') ) {
    console.log('thumbnail 폴더 생성!');
    process.exit(1);
}

const express = require('express');
const multer = require('multer');
const pathUtil = require('path');
const easyimg = require('easyimage');

// AWS 설정
const AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';
AWS.config.accessKeyId = 'ACCESS-KEY';
AWS.config.secretAccessKey = 'SECRET-KEY'

// AWS S3 서비스
const s3 = new AWS.S3();
const bucketName = 's3-examples';

const app = express();

// 멀티파트 요청 분석 미들웨어 : multer
const upload = multer({dest:'uploads/'});

app.listen(3000);

// 데이터베이스 대신 배열로 사용
var data = [];

// get 요청
app.get('/posts', (req, res) => {
    // 제목과 이미지 경로
    res.send(data);
});

app.post('/posts', upload.single('image'), handleImagePost);

// 날짜를 이용해서 임의의 파일 이름 만들기
function getItemKey(originName) {
    // 확장자 얻기
    const extname = pathUtil.extname(originName); 

    const now = new Date(); // 날짜를 이용한 파일 이름 생성
    const itemKey = 'file_' + now.getYear() + now.getMonth() + now.getDay() + now.getHours() + now.getMinutes() + now.getSeconds() + Math.floor(Math.random()*1000) + extname;    
    return itemKey;
}

async function handleImagePost(req, res) {
    // 제목(title)과 파일(image) 전송
    const title = req.body.title;
    const fileInfo = req.file;
    console.log(fileInfo);
    if ( !fileInfo ) {
        return res.status(400);
    }

    try {
        // 데이터베이스에 저장될 데이터
        var record = {title:title};

        const fileName = getItemKey(fileInfo.originalname);
        // S3에서 사용할 itemKey
        const itemKey = 'image/' + fileName;

        // S3로 이미지 업로드
        const fileUploadResult = await uploadToS3(itemKey, fileInfo.path, fileInfo.mimetype);
        record.url = fileUploadResult.url;

        // 썸네일 만들기
        const thumbnailPath = 'thumbnail/' + fileName
        const thumbnail = await easyimg.rescrop({
            src:fileInfo.path,
            dst:thumbnailPath,
            width:100, height:100
        });

        // 쎔네일 올리기
        const thumbnailKey = 'thumbnail/' + fileName;
        const thumbnailUploadResult = await uploadToS3(thumbnailKey, thumbnailPath, fileInfo
        .mimetype);

        // 썸네일 정보 데이터베이스 저장
        record.thumbnail = thumbnailUploadResult.url;

        // 이미지 경로 데이터베이스 저장(배열로 대신)
        data.push(record);

        // TODO : 파일 삭제 오류가 발생했다고 업로드 요청을 에러로 처리할 필요는 없다. - 일괄 삭제도 고려.
        // 원본 이미지와 썸네일 이미지 삭제
        fs.unlinkSync(fileInfo.path);
        fs.unlinkSync(thumbnailPath);

        res.send({msg:'OK', result:record});
    }
    catch ( error ) {
        console.log(error);
        res.status(400).send('Error');
    }
};

// 이미지를 S3로 업로드
function uploadToS3(itemKey, path, mimetype) {
    return new Promise( (resolve, reject) => {
        const params = {
            Bucket: bucketName,  // 필수
            Key: itemKey,			// 필수
            ACL: 'public-read',
            Body: fs.createReadStream(path),
            ContentType: mimetype
        }

        s3.putObject(params, (err, data) => {
            if ( err ) {
                reject(err);
            }
            else {
                const imageUrl = s3.endpoint.href + bucketName + '/' + itemKey;
                resolve({url:imageUrl});
            }
        });
    });
}

const AWS = require('aws-sdk');
const async = require('async');
const fs = require('fs');
const assert = require('assert');
const easyimg = require('easyimage');

const config = require('./s3config.js');
AWS.config.region = config.region;
AWS.config.accessKeyId = config.accessKeyId;
AWS.config.secretAccessKey = config.secretAccessKey;

const s3 = new AWS.S3();

// 버킷 이름
var bucketName = 's3-examples';

function createThumbnail(imagePath, thumbnailPath, callback) {
    easyimg.thumbnail({
        src: imagePath,
        dst: thumbnailPath,
        width: 100
    }).then((image) => {
        console.log('thumbnail created');
        callback(null, image);
    }, (err) => {
        console.error('Thumbanil Create Error', err);
        callback(err);
    });
}

// 파일 업로드
AWS.S3.prototype.uploadFile = function (filePath, contentType, itemKey, callback) {
    var params = {
        Bucket: bucketName,  // 필수
        Key: itemKey,			// 필수
        ACL: 'public-read',
        Body: fs.createReadStream(filePath),
        ContentType: contentType
    }

    this.putObject(params, function (err, data) {
        if (err) {
            console.error('S3 PutObject Error', err);
            return callback(err);
        }
        // 접근 경로 - 2가지 방법
        var imageUrl = s3.endpoint.href + bucketName + '/' + itemKey; // http, https
        // console.log(data);
        callback(null, imageUrl);
    });
}


AWS.S3.prototype.uploadImage = function (fileInfo, uploadInfo, callback) {
    // filePath, contentType, itemKey
    if (!fileInfo.filePath || !uploadInfo || !callback) {
        assert(false, 'check parameter!');
    }

    if (!fileInfo.contentType) {
        fileInfo.contentType = 'image/jpg';
    }


    // 최종 결과용
    var uploadResult = {};

    // 삭제할 파일 경로 저장
    var pathForDelete = [];

    async.waterfall([
        // 원본 이미지 업로드
        (taskDone) => {
            this.uploadFile(fileInfo.filePath, fileInfo.contentType, uploadInfo.itemKey, (err, result) => {
                if (err) {
                    console.error('S3 upload fail :', err);
                    return taskDone(err);
                }
                // 삭제할 이미지 경로 저장
                pathForDelete.push(fileInfo.filePath);
                console.log('이미지 업로드 성공 :', result);
                // 결과용 객체에 이미지 경로 저장
                uploadResult.imageUrl = result;
                taskDone(null);
            });
        },
        // 썸네일 생성/업로드
        (taskDone) => {
            // thumbnailKey 정보가 없으면 썸네일 생성/업로드 안함
            if (!uploadInfo.thumbnailKey) {
                taskDone(null);
            }

            // 썸네일 경로
            const thumbnailPath = fileInfo.filePath + '_thumbnail';

            createThumbnail(fileInfo.filePath, thumbnailPath, (err, result) => {
                // 썸네일 생성 실패 - 원본 이미지 사용
                if (err) {
                    console.log('thumbnail 생성 실패 :', err);
                    // 썸네일 생성 실패 - 이미지 업로드 전체를 멈추지 않는다.
                    return taskDone(null, false);
                }

                // 썸네일 업로드
                this.uploadFile(thumbnailPath, fileInfo.contentType, uploadInfo.thumbnailKey, (err, result) => {
                    if (err) {
                        console.log('thumbanil 업로드 실패', err);
                        // 썸네일 업로드 실패하더라도 이미지 업로드를 중단하지 않는다. 원본 이미지를 썸네일로 사용.
                        return taskDone(null);
                    }
                    console.log('thumbnail 업로드 성공 :', result);

                    // 파일 삭제 태스크를 위한 경로 저장
                    pathForDelete.push(thumbnailPath);

                    // 결과용 객체에 이미지 경로 저장
                    uploadResult.thumbnailUrl = result;
                    
                    taskDone(null);
                });
            });
        },
        // 파일 삭제
        (taskDone) => {            
            try {
                for(var i = 0 ; i < pathForDelete.length ; i++) {
                    const path = pathForDelete[i];
                    fs.unlinkSync(path);
                }
                console.log('파일 삭제 성공');
            }
            catch ( error ) {
                console.log('파일 삭제 에러 :', error);
            }
            
            taskDone(null);
        }
    ], (err) => {
        if (err) {
            return callback(err);
        }
        callback(null, uploadResult);
    });
}


module.exports = s3;
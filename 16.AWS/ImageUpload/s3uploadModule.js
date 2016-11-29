const AWS = require('aws-sdk');
const fs = require('fs');
const assert = require('assert');

const config = require('./s3config.js');
AWS.config.region = config.region;
AWS.config.accessKeyId = config.accessKeyId;
AWS.config.secretAccessKey = config.secretAccessKey;

const s3 = new AWS.S3();

// 버킷 이름
const bucketName = 's3-examples';

AWS.S3.prototype.uploadFile = function(info, itemKey, callback) {
    // filePath, contentType, itemKey
    if ( ! info.filePath || ! itemKey || ! callback ) {
        assert(false, 'check parameter!');
    }

    if ( ! info.contentType ) {
        info.contentType = 'image/jpg';
    }

    const params = {
        Bucket: bucketName,  // 필수
        Key: itemKey,			// 필수
        ACL: 'public-read',
        Body: fs.createReadStream(info.filePath),
        ContentType: info.contentType
    }
    
    this.putObject(params, function (err, data) {
        if (err) {
            console.error('S3 PutObject Error', err);
            return callback(err);
        }
        // 접근 경로 - 2가지 방법
        var imageUrl = s3.endpoint.href + bucketName + '/' + itemKey; // http, https
        console.log(data);

        const result = {
            imageUrl : imageUrl
        };
        callback(null, result);
    });
}


module.exports = s3;
const AWS = require('aws-sdk');
const async = require('async');
const fs = require('fs');

AWS.config.region = 'ap-northeast-2';
AWS.config.accessKeyId = 'AKIAIKRCVHS2NHQ4ADIQ';
AWS.config.secretAccessKey = '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';

const s3 = new AWS.S3();
console.log('s3 endpoint :', s3.endpoint);

class FileUploader {}

FileUploader.uploadMulti = (files, callback) => {
    const param = {
        Bucket : 's3-examples',
        Key : 'multipart-examples2',
        ACL : 'public-read'
    };
    s3.createMultipartUpload(param, (err, data) => {
        if ( err ) {
            console.error('error :', err);
            return;
        }
        console.log('createMultipartUpload success :', data);
        const uploadId = data.UploadId;

        const partBody = fs.createReadStream('./iu1.jpg');

        const partParam = {
            Bucket : param.Bucket,
            Key : param.Key, //param.Key + '/iu.jpg',
            PartNumber : 1,
            UploadId : uploadId,
            Body : partBody
        };

        s3.uploadPart(partParam, (err, data) => {
            if ( err ) {
                console.error('upload part error:', err);
                return;
            }

            const etag = data['ETag'];

            console.log('upload part success :', data);


            const partParam2 = {
                Bucket : param.Bucket,
                Key : param.Key, //param.Key + '/iu.jpg',
                PartNumber : 2,
                UploadId : uploadId,
                Body : fs.createReadStream('./iu2.jpg')
            };
            
            s3.uploadPart(partParam2, (err, data) => {
                if ( err ) {
                    console.error('upload part2 error:', err);
                    return;
                }

                const etag2 = data['ETag'];

                const completeParam = {
                    Bucket : param.Bucket,
                    Key : param.Key,
                    UploadId : uploadId,
                    MultipartUpload : {
                        Parts : [
                            { ETag : etag, PartNumber : 1 }
                            , { ETag : etag2, PartNumber : 2 }
                        ]
                    }
                };

                s3.completeMultipartUpload(completeParam, (err, data) => {
                    if ( err ) {
                        console.error('complete multipart error :', err);
                        return;
                    }

                    console.log('complete multipart success :', data);
                });                


            });



        });
    });
};


FileUploader.uploadMulti(null, null);

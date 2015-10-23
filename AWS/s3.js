var AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-1';
AWS.config.accessKeyId = 'ACCESS_KEY';
AWS.config.secretAccessKey = 'SECRET_ACCESS_KEY'

// Listup All Files
var s3 = new AWS.S3();
console.log('endpoint : ', s3.endpoint);
console.log('href', s3.endpoint.href);

// 버킷 내 객체 목록
var bucketName = 'movies-example-posters';
s3.listObjects({Bucket: bucketName}, function(err, data) {
   console.log('== List Object');
	if ( err ) {
		console.error('S3 listObjects Error', err);
		throw err;	
	} 
	
	var items = data.Contents;
	items.forEach(function(item) {
		// console.log('item : ', item);
      var path1 = s3.endpoint.href + '/' + bucketName + '/' + item.Key;
      var path2 = 'http://' + s3.endpoint.host + '/' + bucketName + '/' + item.Key;
		console.log('path : ', path2);		
	});	
});

// 파일 확인, 메타 데이터
var key = 'posters/avata.jpg';
s3.headObject({Bucket:bucketName, Key:key}, function(err, data) {
   console.log('== HeadObject');
	if ( err && err.statusCode == 404 ) {
		console.log('Not Found');
	}	
	else if ( err ) {
		console.error('headObject Error', err);
	}
	else {
		console.log('Exist, Metadata :', data);		
	}
});
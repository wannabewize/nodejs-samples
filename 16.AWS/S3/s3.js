const AWS = require('aws-sdk');

// 공용 credential 읽기
// ~/.aws/credential 작성. https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-nodejs.html
// const credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
// AWS.config.credentials = credentials;

AWS.config.loadFromPath('./aws_config.json');

// Listup All Files
const s3 = new AWS.S3();
console.log('endpoint : ', s3.endpoint);
console.log('href', s3.endpoint.href);

// 버킷 내 객체 목록
const bucketName = 'idu-s3-example';
s3.listObjects({Bucket: bucketName}, (err, data) => {
   console.log('== List Object');
	if ( err ) {
		console.error('S3 listObjects Error', err);
		throw err;	
	} 
	
	var items = data.Contents;
	items.forEach( (item) => {
		// console.log('item : ', item);
      const path1 = s3.endpoint.href + '/' + bucketName + '/' + item.Key;
      const path2 = 'http://' + s3.endpoint.host + '/' + bucketName + '/' + item.Key;		
		console.log('HTTPS url : ', path1);
		console.log('HTTP url : ', path2);				
	});	
});

// 파일 확인, 메타 데이터
var key = 'posters/avata.jpg';
s3.headObject({Bucket:bucketName, Key:key}, (err, data) => {
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
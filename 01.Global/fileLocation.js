/**
 * 전역 객체의 __filename, __dirname을 이용한 파일 위치 정보 다루기
 */

console.log('__filename:', __filename);
console.log('__dirname:', __dirname);

// 데이터를 저장한 JSON 내용 읽기
const dbConfigPath = __dirname + '/dbConfig.json'; 
console.log('dbConfigFilePath :', dbConfigPath);

// 하위 image 폴더의 image.jpg 경로 만들기
let imagePath = __dirname + '/images/image.jpg';
console.log(`image path : ${imagePath}`)

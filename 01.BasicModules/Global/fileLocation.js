/**
 * 전역 객체의 __filename, __dirname을 이용한 파일 위치 정보 다루기
 */

console.log(`__filename : ${__filename}`);
console.log(`__dirname : ${__dirname}`);

// 같은 폴더의 image.jpg 경로 만들기

let imagePath = __dirname + '/image.jpg';
console.log(`image path : ${imagePath}`)
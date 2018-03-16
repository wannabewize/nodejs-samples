/**
 * 클래스 정의 모듈 사용하기
 */

// 모듈에 작성한 타입 이름으로 require
const Bird = require('./class_module').Bird;

let bird = new Bird;
bird.sing();

const Cat = require('./class_module').Cat;
let cat = new Cat('고양씨');
cat.sleep();
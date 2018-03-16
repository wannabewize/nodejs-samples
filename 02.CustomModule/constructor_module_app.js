/**
 * Constructor 함수를 이용한 클래스 모듈 사용 예제
 */

const Traffic = require('./constructor_module');

let bus = new Traffic.Bus();
bus.take();


let metro = new Traffic.Metro();
metro.ride();


const Exrecise = require('./constructor_module2');
const exercise = new Exrecise();

exercise.pushup();
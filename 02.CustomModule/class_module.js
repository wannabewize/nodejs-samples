/**
 * 다수의 클래스를 하나의 모듈에 작성
 */
class Bird {
   sing() {
      console.log('Bird sing');
   }
}

exports.Bird = Bird;

// exports와 클래스 선언을 동시에
exports.Cat = class {
   constructor(name) {
      this.name = name;
   }
   sleep() {
      console.log(`cat ${this.name} sleeps`);
   }
};
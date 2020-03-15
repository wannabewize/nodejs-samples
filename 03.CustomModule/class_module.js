/**
 * 클래스 모듈
 */
class Cat {
   constructor(name) {
      this.name = name;
   }
   sleep() {
      console.log(`cat ${this.name} sleeps`);
   }
};

module.exports = Cat;
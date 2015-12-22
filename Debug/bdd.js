var should = require('should');
var Calculator = require('./calculator');

describe('Calculator', function () {
   var calculator;

   before(function () {
      calculator = new Calculator();
   });

   after(function () {
      // 모든 테스트를 마치고 
   });

   beforeEach(function () {
      // 개별 테스트 동작 전      
   });

   afterEach(function () {
      // 개별 테스트 후
   });

   it('should add two value', function () {
      var value = calculator.add(1, 2);
      value.should.equal(3);
   });

   it('should minus two values', function () {
      var value = calculator.minus(1, 2);
      value.should.be.exactly(-1);
      
      // Fail
      // var value2 = calculator.minus(1, 1);
      // value2.should.equal(1);
   });
      
   // 비동기 동작을 테스트하려면 콜백 함수를 사용한다.
   it('Async Task Spec', function (done) {
      setTimeout(function () {
         done();
      }, 1000); // 2s 이내로 done이 호출돼야 한다.
   });
});


var assert = require('assert');
var should = require('should');

describe('Tests', function() {
   it('Add',function() {
      var value = 1 + 2;
      assert.equal(value, 3);
   });
   
   it('Minus', function() {
      var value = 1 - 2;
      value.should.equal(-1);      
   });
   
   // 비동기 동작을 테스트하려면 콜백 함수를 사용한다.
   it('Async', function(done) {
      setTimeout(function() {
         done();
      }, 1000); // 2s 이내로 done이 호출돼야 한다.
   }); 
});


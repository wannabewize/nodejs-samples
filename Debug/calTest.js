var assert = require('assert');
var should = require('should');

describe('Calculation', function() {
   it('Add',function(done) {
      var value = 1 + 2;
      assert.equal(value, 3);
      done();
   });
   it('Minus', function(done) {
      var value = 1 - 2;
      value.should.equal(-1);
      done();
   });  
});

// describe('Array', function() {
//    describe('Element Access', function() {
//       it('IndexOf', function(done) {
//          var array = [1,2,3];
//          array.indexOf(1).should.equal(2);
//          done();      
//       });
//    });
// });

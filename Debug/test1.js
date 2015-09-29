var assert = require('assert');
var should = require('should');

describe('Suite', function() {
   it('Add',function(done) {
      assert.equal((1+2), 3);
      done();
   });
   it('Minus', function(done) {
      assert.equal((2-1), 1);
      done();
   });  
});

describe('Array', function() {
   describe('Element Access', function() {
      it('IndexOf', function(done) {
         var array = [1,2,3];
         array.indexOf(1).should.equal(2);
         done();      
      });
   });
});
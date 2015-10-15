var assert = require('assert');
var should = require('should');

describe('Suite2', function() {
   it('Multiply',function(done) {
      assert.equal((1*2), 2);
      done();
   });
   it('Devide', function(done) {
      assert.equal((6/3), 2);
      done();
   });  
});
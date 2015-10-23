var assert = require('assert');
var should = require('should');
var Rectangle = require('../rectangle');

describe('Rectangle', function() {
   var r1 = new Rectangle(10, 20);
   var r2 = new Rectangle(20, 20);
   
   it('isSquare', function() {
      assert.equal(r1.isSquare, false, 'Rectangle(10,20)');
      assert.equal(r2.isSquare, true, 'Rectangle(20,20)');
   });
   
   it('size', function() {
      r1.size().should.equal(10*20, 'Rectangle(10,20)');
      r2.size().should.equal(20*20, 'Rectangle(20,20)');
   });
});
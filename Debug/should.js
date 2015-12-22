var should = require('should');

var intVal = 5;
intVal.should.equal(5);
intVal.should.be.exactly(5);

// intVal.should.equal(4); // Fail

var strVal = 'Hello';
strVal.should.equal('Hello');

strVal.should.startWith('H').and.endWith('o');

var obj = {
   value : 10
};
obj.should.eql({value:10});
// obj.should.equal({value:10}); // Assert Fail





var array = [1, 2, 3, 5];

array.should.have.property(3);
// array.should.have.property(4); // Assert Fail


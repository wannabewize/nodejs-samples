var util = require('util');
var EventEmitter = require('events').EventEmitter;

function MyClass() {   
}

// 순서 주의
util.inherits(MyClass, EventEmitter);

MyClass.prototype.doTaskWithCallback = function(i, j, cb) {
   var ret = i + j;
   setTimeout(function() {
      cb(ret);
   }, 1000);
}

MyClass.prototype.doTaskWithEvent = function(i, j) {
   var ret = i + j;
   var self = this;
   setTimeout(function() {
      self.emit('taskEnd', ret);
   }, 1000);
}

var obj = new MyClass();

// Callback을 이용한 방법
obj.doTaskWithCallback(1, 2, function(ret) {
   console.log('Callback : ', ret);
});


// EventEmitter를 이용한 방법
obj.on('taskEnd', function(ret) {
   console.log('EventEmitter Pattern : ', ret);
});  
obj.doTaskWithEvent(3, 4);
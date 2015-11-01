var util = require('util');
var EventEmitter = require('events').EventEmitter;

function MyClass() {   
}

// 순서 주의
util.inherits(MyClass, EventEmitter);



var obj = new MyClass();

/**
 * Callback을 이용하는 방법
 */

MyClass.prototype.doTaskWithCallback = function(i, j, cb) {
   setTimeout(function() {
      var ret = i + j;
      cb(ret);
   }, 1000);
}

obj.doTaskWithCallback(1, 2, function(ret) {
   console.log('Callback : ', ret);
});

// 2개의 콜백
MyClass.prototype.doTaskWithCallback2 = function(i, j, beforeStart, taskDone) {
   beforeStart();
   setTimeout(function() {
      var ret = i + j;
      taskDone(ret);
   }, 1000);
}

obj.doTaskWithCallback2(3, 4, function() {
   console.log('Befoer');
}, function(ret) {
   console.log('Task Done : ', ret);   
});


/**
 * EventEmitter를 이용한 방법
 */ 

MyClass.prototype.doTaskWithEvent = function(i, j) {
   var self = this;
   setTimeout(function() {
      var ret = i + j;
      self.emit('taskEnd', ret);
   }, 1000);
}

obj.on('taskEnd', function(ret) {
   console.log('EventEmitter Pattern : ', ret);
});  
obj.doTaskWithEvent(1, 2);

// 이벤트 2개
MyClass.prototype.doTaskWithEvent2 = function(i, j) {
   var self = this;
   self.emit('taskStarted');
   
   setTimeout(function() {
      var ret = i + j;
      self.emit('taskDone', ret);
   }, 1000);      
}

obj.on('taskStarted', function() {
   console.log('Task Started Event');
});

obj.on('taskDone', function(ret) {
   console.log('Task Done Event : ', ret);
})

obj.doTaskWithEvent2(3, 4);

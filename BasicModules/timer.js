function sayHello() {
   console.log('Hello World');
}

var t1 = setTimeout(sayHello, 3);
console.log('Timer Example.');

// t2 취소
var t2 = setTimeout(sayHello, 10);
clearTimeout(t2);
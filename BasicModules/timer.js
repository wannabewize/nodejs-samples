function sayHello() {
   console.log('Hello World');
}

setTimeout(sayHello, 3);
console.log('Timer Example.');

// t 취소
var t = setTimeout(sayHello, 10);
clearTimeout(t);
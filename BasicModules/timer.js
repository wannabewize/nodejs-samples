// Timer Sample
function sayHello() {
   console.log('Hello World');
}

console.log('== Timer Example.');
setTimeout(sayHello, 3);

// t 취소
var t = setTimeout(sayHello, 10);
clearTimeout(t);


// Interval Sample
var count = 5;
function sayGoodbay(who) {
   console.log('Good bye', who);   
   if ( count-- <= 0 )
      clearInterval(repeat);
}

var repeat = setInterval(sayGoodbay, 1 * 1000, 'Friend');
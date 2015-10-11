var iu = {
   name : 'IU',
   phone : '010-1234-5678'
};

// property access
console.log(iu.name);
console.log(iu['phone']);

// Class
function Singer(name) {
   this.name = name;
}

var taeyon = new Singer('태연');
taeyon.phone = '010-1357-2468';

console.log(taeyon.name);
console.log(taeyon['phone']);

// Prototype
Singer.prototype.sing = function() {
   console.log('노래 부르기');
}

// constructor

var hani = new Singer('하니');

// Delete property
hani.charactor = '털털';
console.log(hani);
delete hani.charactor;
console.log(hani);
// 없는 프로퍼티 접근
console.log(hani.charactor);


// taeyon.sing(); // Not Defined
hani.sing();


// 새로운 클래스
function Actor(name) {
   this.name = name;  
}

var hyoju = new Actor('한효주');

console.log(iu.constructor);
console.log(taeyon.constructor);
console.log(hani.constructor);
console.log(hyoju.constructor);

if ( taeyon.constructor == hani.constructor ) {
   console.log('Singer.constructor == Singer.constructor');
}

if ( hani.constructor == hyoju.constructor ) {
   console.log('Singer.constructor == Actor.consructor');
}

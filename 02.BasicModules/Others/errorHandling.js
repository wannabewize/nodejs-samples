var count = 1000000;
console.time('TRY-CATCH');
for(var i = 0 ; i < count ; i++ ) {
   func1(i, 0);   
}
console.timeEnd('TRY-CATCH');


console.time('IF-ELSE');
for(var i = 0 ; i < count ; i++ ) {
   func2(i, 0);   
}
console.timeEnd('IF-ELSE');


function func1(a, b) {
   try {
      var c = a / b;
      // console.log(c);
   } catch (error) {
      // console.log('Error : ', c);
   }
}

function func2(a, b) {
   if ( b == 0 ) {
      // console.log('Error : Can not devide by zero');
      return;
   }
   var c = a / b;
   // console.log(c);
}

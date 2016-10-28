// Interval Sample
var count = 5;
function sayGoodbay(who) {
   console.log('Good bye', who);   
   if ( count-- <= 0 )
      clearInterval(repeat);
}

const repeat = setInterval(sayGoodbay, 1 * 1000, 'Friend');
var async = require('async');

var array = ['0123456789', 'abcdefghij', '가나다라마바사아자차'];

async.each(array, function(item, callback) {
   for(var i = 0 ; i < item.length; i++) {
      var c = item.charAt(i);
      console.log(c);
   }
   callback();

}, function(err) {
   if ( err ) {
      console.error('Error : ', err);
   }
});
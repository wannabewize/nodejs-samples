var crypto = require('crypto');

var message = 'Hello Crypto';

var hmacFunc = crypto.createHmac('sha1', 'secret key');
hmacFunc.update(message);
var hmac = hmacFunc.digest('hex');
console.log('hmac : ', hmac);

// 정상 데이터 전송
console.log('== 정상 데이터 전송');
sendMessage(message, hmac);

// 데이터 변조
console.log('== 변조된 데이터 전송');
var changedMessage = message + '!';
sendMessage(changedMessage, hmac);


function sendMessage(message, hmac) {
   var hmacFunc = crypto.createHmac('sha1', 'secret key');
   
   hmacFunc.update(message);
   var hmac2 = hmacFunc.digest('hex');
   
   if ( hmac == hmac2 ) {
      console.log('메세지 변조 안됨');
   }
   else {
      console.log('메세지 변조');
   }   
}
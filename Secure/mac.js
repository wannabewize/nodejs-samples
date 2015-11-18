var crypto = require('crypto');

var message = 'Hello Crypto';

var hmacFunc = crypto.createHmac('sha1', 'secret key');
hmacFunc.update(message);
var hmac = hmacFunc.digest('hex');
console.log('hmac : ', hmac);

// 정상 데이터 전송
console.log('== 정상 데이터 전송');
onMessageReceived(message, hmac);

// 데이터 변조
console.log('== 변조된 데이터 전송');
var changedMessage = message + '!';
onMessageReceived(changedMessage, hmac);


// 메세지와 mac 전송될 때의 동작
function onMessageReceived(message, hmac) {
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
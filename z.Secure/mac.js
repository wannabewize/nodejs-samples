/**
 * Message Authenticate Code
 * 
 * Key를 서로 공유해야 한다.
 */

var crypto = require('crypto');

var SECRET_KEY = 'secret key';
var message = 'Hello Crypto';

var hmacFunc = crypto.createHmac('sha1', SECRET_KEY);
hmacFunc.update(message);
var mac = hmacFunc.digest('hex');
console.log('hmac : ', mac);

// 정상 데이터 전송
console.log('== 정상 데이터 전송');
onMessageReceived(message, mac);

// 데이터 변조
console.log('== 변조된 데이터 전송');
var changedMessage = message + '!';
onMessageReceived(changedMessage, mac);


// 메세지와 mac 전송될 때의 동작
function onMessageReceived(message, mac) {
   var hmacFunc = crypto.createHmac('sha1', SECRET_KEY);
   
   hmacFunc.update(message);
   var digest = hmacFunc.digest('hex');
   
   if ( mac == digest ) {
      console.log('검증 성공 : 메세지 변조 안됨');
   }
   else {
      console.log('검증 실패 : 메세지 변조 됨');
   }   
}
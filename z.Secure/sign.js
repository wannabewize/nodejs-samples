/**
 * 메세지 서명
 * 공개키 암호화를 이용해서 같은 키를 사용하지 않아도 메세지 인증이 가능하다.
 */

var crypto = require('crypto');
var buffer = require('buffer');
var fs = require('fs');

var privateKey = fs.readFileSync('./key.pem');
var publicKey = fs.readFileSync('./cert.pem');

var message = 'Hello World';

// 서명 생성
var sign = crypto.createSign('RSA-SHA256');
sign.update(message);
var signature = sign.sign(privateKey, 'hex');
// console.log(signature);

var receiver = new Receiver();

// 정상 메세지
console.log('== 정상 메세지와 서명 전송');
receiver.receive(message, signature);

// 위조 메세지
console.log('== 위조 메세지와 서명 전송');
var fakeMessage = 'Good morngin';
receiver.receive(fakeMessage, signature);

function Receiver() {   
   this.receive = function(message, signature) {
      // 서명 확인
      var verify = crypto.createVerify('RSA-SHA256');
      verify.update(message);
      var isRight = verify.verify(publicKey, signature, 'hex');
      console.log('Verity : ', isRight);      
   }   
}
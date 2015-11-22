var crypto = require('crypto');

// console.log(crypto.getCiphers());
var key = 'Secret Key';

// 암호화 AES128, 
var cipher = crypto.createCipher('aes128', key);
console.log('cipher : ', cipher);

// 메세지 암호화
var message = 'hello world';

var encrypted = cipher.update(message, 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('encrypted : ', encrypted);

// 키 전달
var receiver = new Receiver(key);
// 암호화된 메세지 전달
receiver.receive(encrypted);


// 암호 해독
function Receiver(key) {
   // 키 교환이 필요
   this.key = key;
   var decipher = crypto.createDecipher('aes128', key);
   
   this.receive = function(msg) {
      var decrypted = decipher.update(msg, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      console.log('decrypted : ', decrypted);
   }   
}
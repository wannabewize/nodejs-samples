// https://jwt.io
// https://github.com/auth0/node-jsonwebtoken

const jwt = require('jsonwebtoken');

//
// 토큰 생성
// jwt.sign(payload, secretOrPrivateKey, options, [callback])
//
const payload = {
   name : 'IU'
};
const secretKey = 'IUakstp'
const expireSec = 10; // '1d'
const option = {
   algorithm : 'HS256', // default, HMAC using SHA-256 hash algorithm
   expiresIn : expireSec
};


const token = jwt.sign(payload, secretKey, option);
console.log('token :', token);

//
// 토큰 검사. 디코딩
// jwt.verify(token, secretOrPublicKey, [options, callback])
// jwt.decode(token [, options])
//
jwt.verify(token, secretKey, (err, decoded) => {
   if ( err ) {
      console.error('Verify error :', err);
      return;
   }
   console.log('Verify success :', decoded);
});

// Expire Error
setTimeout( () => {
   jwt.verify(token, secretKey, (err, decoded) => {
      if ( err ) {
         console.error('Verify 10sec error');
         return;
      }
      console.log('Verify 10sec success :', decoded);
   });
}, expireSec * 1000);
const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/login', handleLogin);
app.get('/profile', sendProfile);
app.get('/public', sendPublicInfo);

app.listen(3000, err => {
   console.log('Server is running @ 3000');
});

const secretKey = 'rhdiddl'

const user = {
   id : 'user',
   password : '1234',
   name : '유저',
   photo : 'https://placekitten.com/g/600/400'
}

function handleLogin(req, res) {
   const id = req.body.id;
   const pw = req.body.password;

   // 로그인 성공
   if ( id === user.id && pw === user.password ) {
      // 토큰 생성
      const token = jwt.sign( { id:user.id, name:user.name }, secretKey );
      res.send({msg:'success', token:token});
   }
   else {
      res.sendStatus(401);
   }
}

function sendPublicInfo(req, res) {
   res.send({msg : 'This is public information'});
}

// 프로필 보기 - 인증된 사용자만 가능
function sendProfile(req, res) {
   // 요청 헤더 중 Authorization 필드로 토큰 얻기
   const token = req.headers['authorization'];
   console.log('token :', token);
   jwt.verify(token, secretKey, (err, decoded) => {
      if ( err ) {
         res.sendStatus(401);
         return;
      }
      res.send({id: user.id, name: user.name, photo: user.photo});
   }); 
}
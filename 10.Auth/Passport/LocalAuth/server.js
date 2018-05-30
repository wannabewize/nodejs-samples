var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();
app.use(morgan('dev'));


// 바디파서 - 필수
app.use(bodyParser.urlencoded({ extended: false }));

// 세션 모듈 설정 - 필수
var session = require('express-session');
app.use(session({
   secret: 'Secret Key',
   resave: false,
   saveUninitialized: true
}));

var passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

const user = {
   id : 'iu',
   password : '1234',
   name : '아이유',
   instagram : 'https://www.instagram.com/dlwlrma'
}

// Local Strategy
var LocalStrategy = require('passport-local').Strategy;
var strategy = new LocalStrategy( (username, password, done) => {
   if ( username == user.id && password == user.password ) {
      return done(null, user);
   }
   else {
      return done(null, false);
   }
});
passport.use(strategy);

// 세션에 기록하기 - id로 기록
passport.serializeUser( (user, done) => {
   console.log('serializeUser', user);
   done(null, user.id);
});

// 세션에서 사용자 id 얻기
passport.deserializeUser( (id, done) => {
   console.log('deserializeUser', id);
   // id에서 사용자 정보 얻기
   done(null, user);
});

// 로그인 요청
// app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/' }));
app.post('/login', function(req, res) {
   passport.authenticate('local', function(err, user, msg) {
      if ( ! user ) {
         res.status(401).json(msg);
         return;         
      }
      // 세션에 기록
      req.logIn(user, function(err) {
         if ( err ) {
            res.status(401).json({msg:'Session Write Error'});
            return;
         }
         res.json({name : user.name , msg : 'Login Success'});         
      });
   })(req);  
});

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

app.get('/public', sendPublicInfo);
app.get('/private', isAuthenticated, sendPrivateInfo);
app.delete('/logout', isAuthenticated, (req, res) => {
   req.logout();
   res.send({msg:'success'});
});

function isAuthenticated(req, res, next) {
   if (req.isAuthenticated()) {
      // 인증된 상태면 다음 미들웨어 실행
      return next();
   }
   // 인증된 상태가 아니면 /login로 이동
   res.send(401);
}

function sendPublicInfo(req, res) {
   res.send({ msg: 'This is public information' });
}

function sendPrivateInfo(req, res) {
   const user = req.user;
   const id = user.id;
   const name = user.name;

   res.send({ msg: 'This is private Information', name: name });
};


app.listen(3000);


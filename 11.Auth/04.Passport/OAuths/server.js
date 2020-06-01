const express = require('express');
const app = express();

// 바디파서
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// logger
const morgan = require('morgan');
app.use(morgan('dev'));


// 정적 파일 서비스
app.use(express.static(__dirname + '/public'));

// Passport 초기화
const passport = require('passport');
app.use(passport.initialize());

// 세션 설정
const session = require('express-session');
app.use(session({
   secret : 'Secret Key',
   resave : false,
   saveUninitialized : false
}));
app.use(passport.session());

// CORS
const cors = require('cors');
app.use(cors({}));

// Strategy!
const fbConfig = require('./fbConfig.js');
const FacebookStrategy = require('passport-facebook').Strategy;
passport.use(new FacebookStrategy(
    {
       profileFields: ['id', 'displayName', 'photos', 'email'],
       // ClientID와 Secret
       clientID: fbConfig.appId,
       clientSecret: fbConfig.appSecret,
       // FB에서의 Callback URL - GET 요청 처리가 가능해야 한다.
       callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    function (accessToken, refreshToken, profile, done) {
       const id = profile.id;

       const name = profile.displayName;
       // emails: [ { value: 'mailaddress@gmail.com' } ]
       const email = profile.emails[0].value;
       const picture = profile.photos[0].value;

       const user = {name:name, email:email};
       console.log(user);

       done(null, user);
    }
));

var FacebookTokenStrategy = require('passport-facebook-token');
passport.use(new FacebookTokenStrategy({
       profileFields: ['id', 'displayName', 'photos', 'email'],
       clientID: fbConfig.appId,
       clientSecret: fbConfig.appSecret
    }, function(accessToken, refreshToken, profile, done) {
      console.log('FB Token Strategy. profile : ', profile);

      const id = profile.id;
      const name = profile.displayName;
      // emails: [ { value: 'mailaddress@gmail.com' } ]
      const email = profile.emails[0].value;
      const picture = profile.photos[0].value;

      const user = {name:name, email:email};
      console.log(user);

      done(null, user);
    }
));

const KakaoStrategy = require('passport-kakao').Strategy;
passport.use(new KakaoStrategy({
       clientID : 'f216469a53e180f160dc034a7b245e97',
       callbackURL : '/oauth'
    },
    function(accessToken, refreshToken, profile, done){
       // 사용자의 정보는 profile에 들어있다.
       console.log('kakao profile : ', profile);
       done(null, {name:'iu'})
    }
));

// 세션 쓰기
passport.serializeUser(function (user, done) {
   done(null, user);
});

// 세션에서 사용자 정보 얻기
passport.deserializeUser(function (user, done) {
   done(null, user);
});

// Kakao WebLogin
app.get('/auth/kakao', passport.authenticate('kakao'));
// Kakao WebLogin - Callback
app.get('/oauth', passport.authenticate('kakao'), (req, res) => {
   console.log('kakao callback : ');
});
// Kakao Token auth


app.get('/', (req, res) => {
   res.sendFile(__dirname + '/public/index.html');
});

// 사용자
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile', 'user_posts'] }));
// 사용자 권한 승인 요청 이후 콜백 페이지 요청
app.get('/auth/facebook/callback', passport.authenticate('facebook'), (req, res) => {
   console.log('After Callback');
   res.sendStatus(200);
});

app.get('/auth/facebook/token', passport.authenticate('facebook-token'),
    function (req, res) {
       console.log(req.user);
       res.send(req.user? 200 : 401);
    }
);

app.get('/private', isAuthenticated, (req, res) => {
   res.send({data:'private content'});
});

function isAuthenticated(req, res, next) {
   if ( req.isAuthenticated())
         return next();
   res.sendStatus(401);
}


app.listen(3000);
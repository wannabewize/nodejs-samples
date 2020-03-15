var express = require('express');
var bodyParser = require('body-parser');
var User = require('./user');

var app = express();

// Logging..
var morgan = require('morgan');
app.use(morgan('dev'));

// 바디파서 - 필수
app.use(bodyParser.urlencoded({ extended: false }));

// Session - to keep user loging infomation
var session = require('express-session');
app.use(session({
   secret: 'keyboard cat',
   resave: false,
   saveUninitialized: true
}));

// Passport Setting
var passport = require('passport');

app.use(passport.initialize()); // 필수
app.use(passport.session());

var FacebookTokenStrategy = require('passport-facebook-token');
var fbConfig = require('./fbConfig');
passport.use('facebook-token', new FacebookTokenStrategy(
   {
      clientID: fbConfig.clientID,
      clientSecret: fbConfig.clientSecret,
      profileFields: ['id', 'displayName', 'photos', 'email'],
   },
   function (accessToken, refreshToken, profile, done) {
      console.log('accessToken : ' + accessToken + " refreshToken : " + refreshToken);
      console.log("profile : ", profile);
      // 사용자 찾거나, 신규 등록    
      User.findOrCreate(profile, accessToken, function (err, user) {
         return done(err, user);
      });
   }
   ));

// 세션에 쓰기
passport.serializeUser(function (user, done) {
   console.log('serializeUser - user.id : ', user.id);
   done(null, user.id);
});

// 세션에 기록된 정보 얻기
passport.deserializeUser(function (id, done) {
   var user = User.findOne(id);
   console.log('deserializeUser', id, user);
   done(null, user);
});

app.post('/auth/facebook/token', function (req, res, next) {
   passport.authenticate('facebook-token', function (err, user, msg, status) {
      if (err) {
         return next(err);
      }
      
      console.log('user : ', user, ' msg : ', msg, ' status : ', status);
      req.logIn(user, function(err) {
         if ( err ) {
            console.error('Error', err);
         }
         res.status(200).send('Done');
      });
   })(req);
});

// 글 쓰기와 읽기 관련 라우팅
app.use(require('./talks'));

app.use(function (err, req, res, next) {
   console.error('Error', err);
   res.status(500).send('Error : ' + err);
});


app.listen(3000);
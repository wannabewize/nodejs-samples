var express = require('express');
var User = require('./user');
var bodyParser = require('body-parser');
var app = express();

// Template Engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Favicon. ignore.
app.use('/favicon.ico', function () { });

// 바디파서 - 필수
app.use(bodyParser.urlencoded({ extended: false }));

// Logging..
var morgan = require('morgan');
app.use(morgan('dev'));

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

var FacebookStrategy = require('passport-facebook').Strategy;
var fbStrategy = new FacebookStrategy(
   {
      profileFields: ['id', 'displayName', 'photos', 'email'],
      // ClientID와 Secret
      clientID: 'CLIENT-ID',
      clientSecret: 'CLIENT-SECRET',
      // Callback URL - GET 요청 처리가 가능해야 한다.
      callbackURL: "http://localhost:3000/auth/facebook/callback"
   },
   function (accessToken, refreshToken, profile, done) {
      // console.log('strategy callback : accessToken : ', accessToken, ' RefreshToken : ', refreshToken);
      // console.log(profile);
      var id = profile.id;
      
      var user = User.findOne(id);
      // 새로운 사용자 -> 사용자 등록
      if ( ! user ) {
         var name = profile.displayName;
         // emails: [ { value: 'mailaddress@gmail.com' } ]
         var email = profile.emails[0].value;
         var picture = profile.photos[0].value;
         User.registerUser(id, name, email, picture, accessToken)
      }
      
      done(null, user);
   });
passport.use(fbStrategy);

// 세션 쓰기
passport.serializeUser(function (user, done) {
   done(null, user.id);
});

// 세션에서 사용자 정보 얻기
passport.deserializeUser(function (id, done) {
   var user = User.findOne(id);
   done(null, user);
});

// 사용자 
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));
// 사용자 권한 승인 요청 이후 콜백 페이지 요청
app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/' }));

app.get('/logout', function (req, res) {
   req.logout();
   res.redirect('/');
})

// 글 쓰기와 읽기 관련 라우팅
app.use(require('./talks'));

// 목록으로 리다이렉션
app.get('/', function (req, res) {
   res.redirect('/talks');
});

app.listen(3000, function (err) {
   console.log('Server is Listening @ 3000');
});

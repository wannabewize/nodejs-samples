var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var User = require('./user');

var app = express();
app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', './views');

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

// Local Strategy
var LocalStrategy = require('passport-local').Strategy;
var strategy = new LocalStrategy(function (username, password, done) {
   var user = User.findOne(username);
   if (!user) {
      return done(null, false, { message: '사용자가 없습니다.' });
   }
   else if (user.password != password) {
      return done(null, false, { message: '비밀번호가 다릅니다.' });
   }

   done(null, user);
});
passport.use(strategy);

// 세션에 기록하기 - id로 기록
passport.serializeUser(function (user, done) {
   console.log('serializeUser', user);
   done(null, user.id);
});

// 세션에서 사용자 id 얻기
passport.deserializeUser(function (id, done) {
   console.log('deserializeUser', id);
   // id에서 사용자 정보 얻기
   var user = User.findOne(id);
   done(null, user);
});

// 로그인 페이지
app.get('/login', function (req, res) {
   res.render('login', { isAuthorized: req.isAuthenticated() })
});

// 로그인 요청
app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

// 회원 가입 폼
app.get('/signup', function (req, res) {
   res.render('signup');
});

app.post('/signup', function (req, res) {
   var id = req.body.id;
   var name = req.body.name;
   var password = req.body.password;
   User.registerUser(id, name, password);
   res.redirect('/');
});

// 로그아웃
app.get('/logout', function (req, res) {
   console.log('로그아웃');
   req.logout();
   res.redirect('/');
});

// 글 쓰기와 읽기 관련 라우팅
app.use(require('./talks'));



// 목록으로 리다이렉션
app.get('/', function (req, res) {
   res.redirect('/talks');
});

app.listen(3000);


var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();
app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', './views');

// 바디파서 - 필수
app.use(bodyParser.urlencoded({extended:false}));

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

var defaultUser = {
   id : 'iu',
   password : '1234',
   name : '아이유'
}

// Local Strategy
var LocalStrategy = require('passport-local').Strategy;
var strategy = new LocalStrategy({ passReqToCallback: true },
   function (req, username, password, done) {
     if ( username == defaultUser.id && password == defaultUser.password ) {
        console.log('로그인 성공');
        return done(null, defaultUser);
     }     
     console.log('로그인 실패');
     return done(null, false, {message:'로그인 실패'});
   }
);
passport.use(strategy);

// 세션에 기록하기
passport.serializeUser(function(user, done) {
  console.log('serializeUser', user);  
  done(null, user.id);
});

// 세션에서 사용자 정보 얻어오기
passport.deserializeUser(function(id, done) {
  console.log('deserializeUser', id);
  done(null, defaultUser);
});

// 로그인 페이지
app.get('/login', function(req, res) {
   console.log('authorized : ', req.isAuthenticated());
   res.render('login', {isAuthorized:req.isAuthenticated()} ) 
});

// 로그인 요청
app.post('/login', passport.authenticate('local', { successRedirect: '/myHome', failureRedirect: '/login'}));

app.get('/myHome', isAuthenticated, function(req, res) {
   // 인증된 상태이므로 myHome 템플릿 페이지 렌더링
   res.render('myHome', {user:req.user});
});

function isAuthenticated(req, res, next) {
   if (req.isAuthenticated()) {
      // 인증된 상태면 다음 미들웨어 실행
      return next();
   }
   // 인증된 상태가 아니면 /login로 이동
   res.redirect('/login');
}


// 로그아웃
app.get('/logout', function(req, res) {
   console.log('로그아웃');
   req.logout();
   res.redirect('/login');
});

app.get('/', function(req, res) {
   res.redirect('/login');
})

app.listen(3000);


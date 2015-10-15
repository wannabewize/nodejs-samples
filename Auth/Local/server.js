var express = require('express');
var app = express();

// 템플릿 엔진
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Favicon. ignore.
app.use('/favicon.ico', function(){});

// 로그 기록
var morgan = require('morgan');
app.use(morgan('dev'));

// bodyParser : POST 메세지 파싱
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

// 세션 설정
var session = require('express-session');
app.use(session({
  secret: 'Secret Key',
  resave: false,
  saveUninitialized: true
}));

// 패스포트 설정
var passport = require('passport');


app.use(passport.initialize());
app.use(passport.session());

// 사용자 정보 저장소
var User = require('./users');

// Local Strategy
var LocalStrategy = require('passport-local').Strategy;
var strategy = new LocalStrategy( {passReqToCallback : true},
  function(req, username, password, done) {
    console.log('LocalStrategy :', username, password);
    
    // 사용자 정보 체크     
    var user = User.findOne(username);
    if ( ! user ) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    else {
      if ( user.password != password ) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      
      console.log('session', req.session);      
      return done(null, user);    
    }
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
  var user = User.findOne(id);  
  done(null, user);
});

// 인증 여부 체크
function isAuthenticated(req, res, next) {
  console.log('isAuthenticated', req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }
  else {
    res.redirect('/login');    
  }  
}

// 로그인 페이지
app.get('/login', function(req, res) {
   res.render('login', {isAuthorized:req.isAuthenticated()} ) 
});
// 로그인 요청
app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login'}));

// 로그아웃
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})


// 회원 가입 페이지
app.get('/signup', function(req, res) {
  res.render('signup', {message:null});
})
app.post('/signup', function(req, res) {  
  var id = req.body.id;
  if ( User.findOne(id) ) {
    // 사용자 중복 체크 - 중복 ID 메세지 전송
    res.render('signup', {message:'Duplicated user id'});
    return;
  }
    
  // 새로운 사용자 등록
  var name = req.body.name;  
  var password = req.body.password;
  User.addNewUser({id:id, username:name, password:password});
  res.redirect('/');
});

// 서비스에 가입한 사용자 전용 페이지, 인증 체크를 한다.
app.get('/mypage', isAuthenticated, function(req, res) {
  res.render('mypage', {'user':req.user});
});   

// 홈페이지
app.get('/', function(req, res) {
  var loggedIn = req.isAuthenticated();
  res.render('home', {isLoggedIn:loggedIn});  
});

app.listen(3008, function(err) {
  if (err) {
    console.error('Listen Error', err);
    throw err;
  }
  console.log('Server is Listening @ 3008');
});
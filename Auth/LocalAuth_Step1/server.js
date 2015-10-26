var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();
app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', './views');

// 바디파서 - 필수
app.use(bodyParser.urlencoded({extended:false}));

var passport = require('passport');
app.use(passport.initialize());

// Local Strategy
var LocalStrategy = require('passport-local').Strategy;
var strategy = new LocalStrategy(   
   function (username, password, done) {
      // 사용자 ID와 PW가 user/1234
     if ( username == 'user' && password == '1234' ) {
        var userInfo = {
           name : 'user'
        }            
        done(null, userInfo);
     }     
     else {
        done(null, false, {message : '로그인 실패'});
     }
   }
);
passport.use(strategy);

// 로그인 페이지
app.get('/login', function(req, res) {
   console.log('authorized : ', req.isAuthenticated());
   res.render('login'); 
});

// 로그인 요청 - 세션은 다음 예제에서 사용
app.post('/login', passport.authenticate('local', { session: false }), function(req, res) {
   console.log(req.user);
   res.end('로그인 성공! 사용자 이름은 ' + req.user.name);
});

app.get('/', function(req, res) {
   res.redirect('/login');
})

app.listen(3000);


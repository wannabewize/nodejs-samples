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
     return done(null, false);
   }
);
passport.use(strategy);

// 로그인 페이지
app.get('/login', function(req, res) {
   console.log('authorized : ', req.isAuthenticated());
   res.render('login', {isAuthorized:req.isAuthenticated()} ) 
});

// 로그인 요청
app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login'}));

app.get('/', function(req, res) {
   res.redirect('/login');
})

app.listen(3000);


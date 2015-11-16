/**
 * Passport Sample
 * Login 응답 커스터마이징
 */
var express = require('express');
var app = express();

var morgan = require('morgan');
app.use(morgan('dev'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

var defaultUser = {
   id : 'user',
   name : '사용자',
   pw : '1234'
};

var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

// Local Passport
var LocalStrategy = require('passport-local').Strategy;
var strategy = new LocalStrategy(function(username, password, done) {
   if ( username != defaultUser.id ) {
      return done(null, false, {msg : 'No user.'});
   }
   else if ( password != defaultUser.pw ) {
      return done(null, false, {msg: 'Password mismatch.'});
   }
   done(null, defaultUser);
});

// 세션 기록
passport.serializeUser(function(user, done) {  
   done(null, user);
});

// 세션에 작성한 정보를 토대로 사용자 정보 얻기
passport.deserializeUser(function(id, done) {   
   done(null, defaultUser);
});

passport.use(strategy);

// Custom Resonse
app.post('/login', function(req, res, next) {
   passport.authenticate('local', function(err, user, msg, statusCode) {
      if ( ! user ) {
         res.status(401).json(msg);
         return;         
      }
      req.logIn(user, function(err) {
         if ( err ) {
            res.status(401).json({msg:'Session Write Error'});
            return;
         }
         next();
      });
   })(req);  
}, function(req, res) {
   var userInfo = req.user;
   res.json({name : userInfo.name , msg : 'Login Success'});
});

app.listen(3000);
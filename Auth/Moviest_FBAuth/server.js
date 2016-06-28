var express = require('express');
var bodyParser = require('body-parser');
var User = require('./User');

var app = express();

app.use(bodyParser.json());
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
passport.use('facebook-token', new FacebookTokenStrategy(
    {
        clientID:APP-ID,
        clientSecret: CLIENT-SECRET,
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

// 토큰을 이용한 사용자 등록과 인증
app.post('/auth/facebook/token', function (req, res, next) {
    passport.authenticate('facebook-token', function (err, user, msg, status) {
        if (err) {
            return next(err);
        }
        // 인증 성공
        console.log('user : ', user, ' msg : ', msg, ' status : ', status);
        // 세션 기록을 위해서 login 호출
        req.logIn(user, function(err) {
            if ( err ) {
                console.error('Error', err);
                res.sendStatus(500);
                return;
            }
            res.status(200).send('Done');
        });
    })(req);
});

app.delete('/logout', function(req, res) {
    req.logout();
    res.sendStatus(200);
});

app.use(express.static('./public'));

app.use(require('./movieRouter'));

app.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);
var express = require('express');
var bodyParser = require('body-parser');
var movieRouter = require('./routes/movie_router');
var User = require('./model/userModel');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

var session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use('/favicon.ico', function () { });

var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

var FacebookTokenStrategy = require('passport-facebook-token');
passport.use('facebook-token', new FacebookTokenStrategy(
    {
        clientID: '1866106250330238',
        clientSecret: '5b97ae80a19755face568b7e0675f887',
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


// 정적 파일 제공 서비스
app.use(express.static('public'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/register', passport.authenticate('facebook-token'),
    function (req, res) {
        if ( req.user ) {
            res.sendStatus(200);
        }
        else {
            res.sendStatus(401);
        }
    }
);

app.post('/login', passport.authenticate('facebook-token'),
    function (req, res) {
        if ( req.user ) {
            res.sendStatus(200);
        }
        else {
            res.sendStatus(401);
        }
    }
);

app.use(movieRouter);


app.listen(3000, function() {
    console.log('Movie server is listening 3000');
});
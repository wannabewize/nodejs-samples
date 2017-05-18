//
// JWT와 Passport 예제
// 로그인 성공시 1년 유효기간의 토큰 발급. 인증 필요시 헤더의 authorization 필드로 토큰 전송
//
const express = require('express');
const app = express();

app.listen(3000);

// 로그인 요청은 POST로 전달된다.
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');

// Passport 설정
const passport = require('passport');
app.use(passport.initialize());

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const secretKey = 'secret';

var opts = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: secretKey
}

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    console.log('JWT 해독 성공 : ', jwt_payload);
    // 토큰에서 유효한 사용자인지 검사
    if (jwt_payload.id == 'iu') {
        return done(null, { id: 'iu', name: '아이유' });
    }
    done(null, false);
}));

// login 요청. JSON으로 iu/1234로 로그인하면 토큰이 발급된다.
app.post('/login', handleLogin);
function handleLogin(req, res) {
    if (req.body.id == 'iu' && req.body.pw == '1234') {
        const payload = {
            id: 'iu',
            role: 'user'
        };
        const option = {
            expiresIn: '1 year'
        };
        const token = jwt.sign(payload, secretKey, option);
        res.send({ msg: 'success', token: token });
    }
    else {
        res.status(401);
    }
}

// 로그인이 필요한 API 접근하기. header에 authorization 필드로 토큰을 입력한다.
app.get('/private',
    (req, res, next) => {
        console.log('JWT: ', req.headers.authorization);
        next();
    },
    // 세션 사용 안하는 설정. true가 되면 serialize/deserialize를 작성해야 한다.
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        // 인증 통과! - Strategy의 콜백으로 전달된 user는 req.user로 사용
        res.send({msg:'success', data: 'private data.', username:req.user.name});
    }
);

app.get('/decode', (req, res) => {
    const token = req.headers.authorization;
    console.log('token :', token);
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            res.status(404);
            return;
        }
        res.send(decoded);
    });
});

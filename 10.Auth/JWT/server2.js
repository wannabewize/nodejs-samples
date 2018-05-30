const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

const secretKey = 'IUakstp'

const user = {
   id : 'iu',
   password : '1234',
   name : '아이유',
   instagram : 'https://www.instagram.com/dlwlrma'
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// 토큰 검증 미들웨어
app.use(tokenVerifier);

function tokenVerifier(req, res, next) {
    let token = req.headers['token'];
    if ( ! token ) {
        token = req.cookies['token'];
    }
    
    if (token) {
        console.log('token :', token);
        jwt.verify(token, secretKey, (err, decoded) => {
            if (decoded) {
                req.user = decoded;
            }
            next();
        });
    }
    else {
        next();
    }    
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
 });
app.post('/login', handleLogin);
app.get('/public', sendPublicInfo);
app.get('/private', authenticate, sendPrivateInfo);

app.listen(3000, err => {
   console.log('Server is running @ 3000');
});


function handleLogin(req, res) {
    const id = req.body.id;
    const pw = req.body.password;

    // 로그인 성공
    if (id === user.id && pw === user.password) {
        // 토큰 생성
        const token = jwt.sign({ id: user.id, name: user.name }, secretKey);
        console.log('Success :', token);

        // 웹의 경우 쿠키에 토큰을 제공
        res.cookie('token',token);
        res.send({ msg: 'success', token: token });
    }
    else {
        res.sendStatus(401);
    }
}

function sendPublicInfo(req, res) {
    res.send({ msg: 'This is public information' });
}

function sendPrivateInfo(req, res) {
    const user = req.user;
    const id = user.id;
    const name = user.name;

    res.send({ msg: 'This is private Information', name: name });
};

function authenticate(req, res, next) {
    if ( ! req.user ) {
        res.status(401).json({ message: "Incorrect token credentials" });
    }
    else {
        next();
    }
} 
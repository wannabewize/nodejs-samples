const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

const secretKey = 'rhdiddl'

const user = {
   id : 'user',
   password : '1234',
   name : '유저',
   photo : 'https://placekitten.com/g/600/400'
}

app.use(bodyParser.json());

function tokenVerifier(req, res, next) {
    let token = req.headers['authorization'];
    
    if (token) {
        console.log('token :', token);
        jwt.verify(token, secretKey, (err, decoded) => {
            if (decoded) {
                req.user = decoded;
                next();
            }
            else {
                next({code: 401, msg: 'UnAuthorized'});
            }            
        });
    }
    else {
        next({code: 401, msg: 'UnAuthorized'});
    }    
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
 });
app.post('/login', handleLogin);
app.get('/public', sendPublicInfo);
app.get('/profile', tokenVerifier, sendProfile);
app.use((err, req, res, next) => {
    res.status(err.code).send({msg: err.msg});
});

app.listen(3000, err => {
   console.log('Server is running @ 3000');
});


function handleLogin(req, res) {
    const id = req.body.id;
    const pw = req.body.password;

    console.log('trying to login:', id, pw);

    // 로그인 성공
    if (id === user.id && pw === user.password) {
        // 토큰 생성
        const token = jwt.sign({ id: user.id, name: user.name }, secretKey);
        console.log('Success :', token);

        res.send({ msg: 'success', token: token });
    }
    else {
        res.sendStatus(401);
    }
}

function sendPublicInfo(req, res) {
    res.send({ msg: 'This is public information' });
}

function sendProfile(req, res) {
    const user = req.user;
    const id = user.id;
    const name = user.name;

    res.send({id: user.id, name: user.name, photo: user.photo});
};

function authenticate(req, res, next) {
    if ( ! req.user ) {
        res.status(401).json({ message: "Incorrect token credentials" });
    }
    else {
        next();
    }
} 
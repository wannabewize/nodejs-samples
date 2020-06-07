const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


const secretKey = 'rhdiddl'
const user = {
    id: 'user',
    password: '1234',
    name: 'User',
    instagram: 'https://www.instagram.com/dlwlrma'
}

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

const secureServer = https.createServer({
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.cert')
}, app);
secureServer.listen(3001);

const server = http.createServer(app);
server.listen(3000);

function handleLogin(req, res) {
    const id = req.body.id;
    const password = req.body.password;

    console.log('handing login:', id, password);

    if (id === user.id && password === user.password) {
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


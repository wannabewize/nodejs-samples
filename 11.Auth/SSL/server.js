const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.post('/login', handleLogin);

const user = {
    id: 'iu',
    password: '1234',
    name: 'IU',
    instagram: 'https://www.instagram.com/dlwlrma'
}

function handleLogin(req, res) {
    const id = req.body.id;
    const password = req.body.password;

    console.log('handing login:', id, password);

    if (id === user.id && password === user.password) {
        // 로그인 성공시 : 세션에 사용자 ID 저장
        req.session.userid = id;
        res.sendStatus(200);
    }
    else {
        res.sendStatus(401);
    }
}

const secureServer = https.createServer({
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.cert')
}, app);
secureServer.listen(3001);

const server = http.createServer(app);
server.listen(3000);
const express = require('express');
const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/auth/success', (req, res) => {
    console.log('Redirected : ', req);
    res.send({msg: 'OK'});
});
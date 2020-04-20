const express = require('express');
const app = express();

app.listen(3000);

app.get('/movies', (req, res) => {
    res.send('GET /movies');
});

app.post('/movies', (req, res) => {
    res.send('POST /movies');
});

app.get('/theaters', (req, res) => {
    res.send('GET /theaters');    
});
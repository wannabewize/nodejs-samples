const express = require('express');
const pathUtl = require('path');
const app = express();

app.use(express.static(__dirname + '/../Resources'));

app.listen(3000);

app.get('/', (req, res) => {
    const path = pathUtl.resolve(__dirname + '/../Resources/sports.html');
    res.sendFile(path);
});

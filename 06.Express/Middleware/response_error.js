const express = require('express');
const app = express();
app.listen(3000);

app.use('/', (req, res) => {
    // res.send({msg: 'Hello'});
    // res.send({msg: 'World'});
    res.json({msg: 'Hello'});
    res.json({msg: 'World'});
});
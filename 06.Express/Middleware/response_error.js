const express = require('express');
const app = express();
app.listen(3000);

// 헤더 종료 후 헤더 보내기
app.use('/error', (req, res) => {
    res.send({msg: 'Hello'});
    res.send({msg: 'World'});
});
const express = require('express');
const app = express();

// 정적 파일 서비스
app.use(express.static('./public'));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/public/index.html');
});


app.listen(3000);
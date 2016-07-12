const express = require('express');
const app = express();

app.use(express.static('./public'));

app.use(require('./router/movieRouter.js'));

app.get('/', (req, res) => {
   res.sendFile('./public/index.html');
});

app.use(function(error, req, res, next) {
   console.log('Error : ', error);
   res.send({error : error.message});
});

app.listen(3000);
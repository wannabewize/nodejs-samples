const express = require('express');
const favicon = require('serve-favicon');

const app = express();

// 파비콘 요청이면 콘솔 출력
app.get('/', (req, res, next) => {
   if ( req.url == '/favicon.ico') {
      console.log('Favicon 요청');
   }
   next();
});

app.use(favicon(__dirname + '/favicon.ico'));

app.use((req, res) => {
   res.sendFile(__dirname + '/faviconIndex.html');      
});

// Random Response
app.listen(3000, function(err) {
   console.log('Server is listening @3000');
});

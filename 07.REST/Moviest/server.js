const express = require('express');
const app = express();

const movieRouter = require('./router/movie_router');
app.use(movieRouter);

// 여기까지 오면 - 에러
app.use(function(req, res, next) {
  res.sendStatus(404);  
});

app.use(function(err, req, res, next) {
   res.status(500).send({mag: err.message});
});


app.listen(3000, err => {
   if ( err ) {
      console.error("Error : ", err);
      return;
   }
   console.log('Server is running @ 3000');
});
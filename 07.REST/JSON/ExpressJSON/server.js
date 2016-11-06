/**
 * Express - JSON
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// 데이터
var movieList = [{title:'아바타', director:'제임스 카메론'}];

// JSON용 바디 파서
app.use(bodyParser.json());

app.post('/', (req, res) => {
   const title = req.body.title;
   const director = req.body.director;
   
   if ( ! title || ! director ) {
      const result = {error:'wrong field'};
      res.status(400).send(result);
      return;
   }
   else {
      movieList.push({title:title, director:director});
      const result = {result:'success'};
      res.send(result);
   }      
});

app.get('/', (req, res) => {
   const result = {
      count : movieList.length,
      data : movieList
   };
   res.send(result);
});

app.listen(3000, err => {
   if ( err ) {
      console.error('Error : ', err);
      return;
   }
   console.log('Server is running@3000');
});
const express = require('express');
const router = express.Router();

var articles = [];

router.post('/articles', (req, res) => {
   const user = req.session.user;

   console.log('user from session : ',user);

   if ( ! user ) {
      res.status(401).send({msg:'로그인 필요'});
      return;
   }

   const text = req.body.text;
   if ( ! text ) {
      res.status(400).send({msg:'글 내용(text) 입력 오류'});
      return;
   }

   articles.push({id:user.id, name:user.name, text:text});

   res.send({msg:'success'});
});

router.get('/articles', (req, res) => {
   res.send({count:articles.length, data:articles});
});

module.exports = router;

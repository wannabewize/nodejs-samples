var express = require('express');
var FB = require('fb');

var router = express.Router();

// 데이터베이스 - 대신
var articles = [{writer:'Default', talk:'SmllTalk with FBAuth Example'}];

router.get('/talks', function (req, res) {
   console.log('req.user : ', req.user);
   res.json({ talks: articles});
});

// 글쓰기 POST 요청
router.post('/talks', isAuthenticated, function (req, res) {
   var name = req.user.name;
   var talk = req.body.talk;

   articles.push({ writer: name, talk: talk });
   res.sendStatus(200);
});


function isAuthenticated(req, res, next) {   
   if (req.isAuthenticated()) {
      // 인증된 상태면 다음 미들웨어 실행
      return next();
   }
   // 인증된 상태가 아니면 /로 이동
   res.sendStatus(401);   
}

module.exports = router;
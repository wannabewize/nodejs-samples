var express = require('express');
var router = express.Router();


// 데이터베이스 - 대신
var articles = [];

router.get('/articles', function (req, res) {
   console.log('req.user : ', req.user);
   res.render('articleList', { articles: articles, isAuthorized: req.isAuthenticated() });
});

// 글쓰기 POST 요청
router.post('/articles', isAuthenticated, function (req, res) {
   var writer = req.user.name;
   var text = req.body.text;

   articles.push({ writer: writer, text: text });
   res.redirect('/articles');
});

// 글 쓰기 폼 GET 요청
router.get('/write', isAuthenticated, function (req, res) {
   var userName = req.user.name;
   res.render('writeForm', { userName: userName });
});

function isAuthenticated(req, res, next) {
   if (req.isAuthenticated()) {
      // 인증된 상태면 다음 미들웨어 실행
      return next();
   }
   // 인증된 상태가 아니면 /login로 이동
   res.redirect('/login');
}


module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/lunch', function(req, res) {
   res.end('lunch~!');
});

module.exports = router;
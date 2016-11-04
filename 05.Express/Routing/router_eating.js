const express = require('express');
const router = express.Router();

router.get('/lunch', (req, res) => {
   res.end('lunch~!');
});

module.exports = router;
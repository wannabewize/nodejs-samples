var express = require('express');
var greetingRouter = require('./greetingRouter');

var app = express();

// /hello, /howAreYou/[who]
app.use(greetingRouter);

// /eat/lunch
app.use('/eat', require('./eatingRouter'));

app.listen(3000);

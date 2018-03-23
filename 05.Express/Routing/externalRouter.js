/**
 * 라우터
 */
const express = require('express');
const greeting = require('./router_greeting');

const app = express();

// /hello, /howAreYou/[who]
app.use(greeting);

// /eat/lunch
app.use('/eat', require('./router_eating'));

app.listen(3000);

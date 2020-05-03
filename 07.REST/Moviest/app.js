const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));

const movieRouter = require('./router/MovieRouter');
app.use(movieRouter);

module.exports = app;


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const movieRouter = require('./router');
app.use(movieRouter);

app.listen(3000);

require('dotenv').config();


var express = require('express');
var path = require('path');




var indexRouter = require('./src/index.js');


var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


module.exports = app;

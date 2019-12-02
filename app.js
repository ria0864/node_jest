'use strict';
const express = require('express'),
  http = require('http'),
  path = require('path');

const session = require('express-session'),
  methodOverride = require('method-override'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  multer = require('multer'),
  errorHandler = require('errorhandler'),
  favicon = require('serve-favicon');

const ROOT_PATH = __dirname;

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({
  secret: 'uwotm8',
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.json({
  limit: '50mb'
})); //body 의 크기 설정
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
})); //url의 크기 설정
app.use(multer());
app.use(express.static(path.resolve(ROOT_PATH, './src')));
if ('development' === app.get('env')) {
  app.use(errorHandler());
}
require('./router.js').route(app, ROOT_PATH);

const server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app
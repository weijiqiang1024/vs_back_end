var express = require('express');
var app = express();
var db = require('./models/db.js');
var router = require('./router/index');
var bodyParser = require('body-parser')

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(bodyParser.urlencoded({
  extended: false
}));

app.post('/login', router.login);

app.listen(3000, () => {
  console.log('node server listen port 3000');
});
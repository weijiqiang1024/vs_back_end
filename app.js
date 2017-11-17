var express = require('express');
var app = express();
var db = require('./models/db.js');
var router = require('./router/index');

app.all('/', function(req, res, next) {
  console.log(req);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  //res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.get('/login', function(req, res) {
  console.log(req);
});

app.listen(3000, () => {
  console.log('node server listen port 3000');
});
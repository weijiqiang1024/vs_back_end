// mongoose 链接
//
var mongoose = require('mongoose');
//连接相应数据库，在这里连接的是vs_backend数据库
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/vs_backend');

// 链接错误
db.on('error', function(error) {
  console.log(error);
});

// 链接成功
db.once('open', function(error) {
  console.log("数据库连接成功");
});

module.exports = db;
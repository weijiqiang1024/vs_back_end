var fs = require('fs');

var userModel = require('../models/userModel');

exports.login = (req, res) => {
  debugger;
  userModel.find({
    name: req.name
  }, function(err, docs) {
    if (err) {
      console.log(err);
      return '登陆失败！';
    } else {
      console.log(docs);
      if (req.pwd == docs.pwd) {
        return '登陆成功！'
      } else {
        return '登陆失败！'
      }
    }
  });
}
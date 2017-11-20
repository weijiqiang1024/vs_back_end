var fs = require('fs');

var User = require('../models/userModel');

/**
 * 插入
 */
function insert() {

  var user = new User({
    username: 'admin', //用户账号
    password: '123', //密码
    //最近登录时间
  });

  user.save(function (err, res) {

    if (err) {
      console.log("Error:" + err);
    } else {
      console.log("Res:" + res);
    }

  });
}

// insert();

exports.login = (req, res) => {

  User.find({
    'username': req.body.username
  }, function (err, docs) {

    if (err) {
      return res.send({
        ret: 0,
        msg: '登陆失败！'
      });
    } else {
      if (req.body.password == docs[0].password) {
        let userData = [{
          username: docs[0].username
        }]

        return res.send({
          ret: 1,
          userData: userData,
          msg: '登陆成功！'
        });
      } else {
        return res.send({
          ret: 0,
          msg: '登陆失败！'
        });
      }
    }
  });
}
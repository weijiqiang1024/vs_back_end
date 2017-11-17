var mongoose = require('mongoose')
var db = require('./db')

var Schema = mongoose.Schema; //  创建模型
var userScheMa = new Schema({
  name: String,
  password: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联

// userScheMa.static.find = function(user) {

// }

exports.user = db.model('users', userScheMa); //  与users集合关联
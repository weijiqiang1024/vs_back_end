// var mongoose = require('mongoose')
var mongoose = require('./db')

var Schema = mongoose.Schema; //  创建模型
var userScheMa = new Schema({
  username: String,
  password: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联

module.exports = mongoose.model('user', userScheMa, 'user'); //  与users集合关联
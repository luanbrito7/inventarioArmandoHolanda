const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: 'enter your name'
  },
  password: {
    type: String,
    required: 'enter your password'
  },
  username: {
    type: String,
    required: 'enter your username'
  },
  isAdmin: {
      type: Boolean,
      required: 'Are you admin?'
  }
});

module.exports = mongoose.model('User', UserSchema, 'User');
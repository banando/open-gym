var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var userSchema = new mongoose.Schema({
  name:     String,
  handle:   String,
  email:    String,
  password: String,
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Court'}]
});

var User = mongoose.model('User', userSchema);

module.exports = User;

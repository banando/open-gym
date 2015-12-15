var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var userSchema = new mongoose.Schema({
  name:     String,
  email:    String,
  handle:   String,
  password: String,
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Court'}]
});

// add bcrypt hashing to model

var User = mongoose.model('User', userSchema);

module.exports = User;

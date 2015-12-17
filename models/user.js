var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

mongoose.Promise = Promise;

var userSchema = new mongoose.Schema({
  name:     String,
  email:    String,
  handle:   String,
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Court'}]
});

userSchema.plugin(require('mongoose-bcrypt'));

var User = mongoose.model('User', userSchema);

module.exports = User;

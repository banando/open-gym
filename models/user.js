var mongoose = require('mongoose'),
    debug    = require('debug')('app:models'),
    bcrypt   = require('bcrypt-nodejs');

mongoose.Promise = Promise;

var userSchema = new mongoose.Schema({
  name:     String,
  email:    String,
  handle:   String,
  password: String,
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Court'}]
});

// userSchema.plugin(require('mongoose-bcrypt'));
// hash the password before the user is saved
userSchema.pre('save', function(next) {
  var user = this;

  // hash the password only if the password has been changed or user is new
  if (!user.isModified('password')) return next();

  // generate the hash
  bcrypt.hash(user.password, null, null, function(err, hash) {
    if (err) return next(err);

    // change the password to the hashed version
    user.password = hash;
    next();
  });
});

// method to compare a given password with the database hash
userSchema.methods.comparePassword = function(password) {
  var user = this;

  return bcrypt.compareSync(password, user.password);
};

var User = mongoose.model('User', userSchema);

module.exports = User;

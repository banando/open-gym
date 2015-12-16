var jwt  = require('jsonwebtoken'),
    User = require('../models/user');

// In order to simplify our process, we will handle the request
// inline here, instead of passing to controller files.
var createToken = function(req, res, next) {

  // validations
  checkCredentials(req, res, next);
  checkUserExists(req, res, next);
  validateCredentials(req, res, next);

  var token = jwt.sign(
    {
      email: req.user.email,
      name:  req.user.name,
      use:   'public_api'
    },
    app.get('secret-key'),
    {
      expiresIn: 100000090 // short, so we can test better
    });

  res.json({
    success: true,
    message: 'Successfully generated token.',
    token: token
  });
};

// *** VALIDATIONS ***

function checkCredentials(req, res, next) {
  if (
    !req.body.email    ||
    !req.body.password
  ) {
    errorHandler(
      422,
      'Missing required field: email and/or password.',
      req, res
    );
  } else {
    next();
  }
}

function checkUserExists(req, res, next) {
  User.findOne({email: req.body.email}).exec()
    .catch(function(err) {
      next(err);
  }).then(function(user) {
      if (!user) {
        errorHandler(
          401,
          'Authentication failed: user does not exist.',
          req, res
        );
      } else {
        // add user to request!
        req.user = user;
        next();
      }
  });
}

function validateCredentials(req, res, next) {
  req.user.verifyPassword(req.body.password, function(err, valid) {
    if (!valid) {
      errorHandler(
        401,
        'Authentication failed: credentials incorrect.',
        req, res
      );
    } else {
      next();
    }
  });
}

module.exports = {
  createToken: createToken
}

var jwt  = require('jsonwebtoken'),
    User = require('../models/user');

// In order to simplify our process, we will handle the request
// inline here, instead of passing to controller files.
var createToken = function(req, res, next) {

  console.log("here")

  // validations
  var cont = checkCredentials(req, res, next);

  if (cont) {
    var token = jwt.sign(
      {
        handle: req.user.handle,
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
  }
};

// *** VALIDATIONS ***

function checkCredentials(req, res, next) {
  if (
    !req.body.handle    ||
    !req.body.password
  ) {
    errorHandler(
      422,
      'Missing required field: email and/or password.',
      req, res
    );
    return false;
  } else {
    checkUserExists(req, res, next);
  }
}

function checkUserExists(req, res, next) {
  User.findOne({handle: req.body.handle}).exec()
    .catch(function(err) {
      next(err);
  }).then(function(user) {
      console.log("checking user no error:", user)
      if (!user) {
        errorHandler(
          401,
          'Authentication failed: user does not exist.',
          req, res
        );
        return false;
      } else {
        // add user to request!
        req.user = user;
        validateCredentials(req, res, next);
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
      return false;
    } else {
      // next();
      return;
    }
  });
}

function errorHandler(code, message, req, res) {
  var title = '';
  var responseJson = {};

  res.status(code);
  switch(code) {
    case 400: title = '400 Bad Request';  break;
    case 401: title = '401 Unauthorized'; break;
    case 403: title = '403 Forbidden';    break;
    case 404: title = '404 Not Found';    break;
    case 422: title = '422 Unprocessable Entity';
  }

  responseJson.response = title;
  if (message && message.length > 0) responseJson.message = message;

  res.json(responseJson);
}

module.exports = {
  createToken: createToken
}

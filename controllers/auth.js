var jwt  = require('jsonwebtoken'),
    User = require('../models/user');

// In order to simplify our process, we will handle the request
// inline here, instead of passing to controller files.
// var createToken = function(req, res, next) {

//   console.log("here")

//   // validations
//   var cont = checkCredentials(req, res, next);

//   console.log(cont);
//   if (cont) {
//     console.log('something recieved')
//     var token = jwt.sign(
//       {
//         handle: req.user.handle,
//         name:  req.user.name,
//         use:   'public_api'
//       },
//       app.get('secret-key'),
//       {
//         expiresIn: 100000090 // short, so we can test better
//       });

//     res.json({
//       success: true,
//       message: 'Successfully generated token.',
//       token: token
//     });
//   }
//   next();
// };

// // *** VALIDATIONS ***

// function checkCredentials(req, res, next) {
//   if (
//     !req.body.handle    ||
//     !req.body.password
//   ) {
//     errorHandler(
//       422,
//       'Missing required field: email and/or password.',
//       req, res
//     );
//     return false;
//   } else {
//     checkUserExists(req, res, next);
//   }
// }

// function checkUserExists(req, res, next) {
//   User.findOne({handle: req.body.handle}).exec()
//     .catch(function(err) {
//       next(err);
//   }).then(function(user) {
//       console.log("checking user no error:", user)
//       if (!user) {
//         errorHandler(
//           401,
//           'Authentication failed: user does not exist.',
//           req, res
//         );
//         return false;
//       } else {
//         console.log('user exists');
//         // add user to request!
//         req.user = user;
//         validateCredentials(req, res, next);
//       }
//   });
// }

// function validateCredentials(req, res, next) {
//   req.user.verifyPassword(req.body.password, function(err, valid) {
//     if (!valid) {
//       errorHandler(
//         401,
//         'Authentication failed: credentials incorrect.',
//         req, res
//       );
//       return false;
//     } else {
//       console.log('validated credentials')
//       return true;
//     }
//   });
// }

// function errorHandler(code, message, req, res) {
//   var title = '';
//   var responseJson = {};

//   res.status(code);
//   switch(code) {
//     case 400: title = '400 Bad Request';  break;
//     case 401: title = '401 Unauthorized'; break;
//     case 403: title = '403 Forbidden';    break;
//     case 404: title = '404 Not Found';    break;
//     case 422: title = '422 Unprocessable Entity';
//   }

//   responseJson.response = title;
//   if (message && message.length > 0) responseJson.message = message;

//   res.json(responseJson);
// }


var userAuth = function (req, res, next) {
  // find the user
  User.findOne({
      handle: req.body.handle
    }).select('handle password').exec(function(err, user) {

      if (err) throw err;

      // no user with that handle was found
      if (!user) {
        res.json({
          success: false,
          message: 'Authentication failed. User not found.'
        });
      } else if (user) {

        // check if password matches
        var validPassword = user.comparePassword(req.body.password);
        if (!validPassword) {
          res.json({
            success: false,
            message: 'Authentication failed. Wrong password.'
          });
        } else {

          // if user is found and password is right
          // create a token
          var token = jwt.sign({
            handle: user.handle,
            use:   'public_api'
          }, process.env.SECRET_KEY, {
            expiresInMinutes: 43200 // expires in 30 days
          });

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token,
            user: user
          });
        }

      }

    });
  };

function tokenVerify(req, res, next) {
  // do logging
  console.log('Somebody just accessed the Fishin Triumphs API!');

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {

      if (err) {
        res.status(403).send({
          success: false,
          message: 'Failed to authenticate token.'
      });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;

        next(); // make sure we go to the next routes and don't stop here
      }
    });

  } else {

    // if there is no token
    // return an HTTP response of 403 (access forbidden) and an error message
    res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
};


module.exports = {
  userAuth: userAuth,
  tokenVerify: tokenVerify
}

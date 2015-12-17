var express = require('express'),
    router  = new express.Router();

// Require controllers.
var welcomeController = require('../controllers/welcome');
var usersController   = require('../controllers/users');
var authController    = require('../controllers/auth');
// root path:
router.get('/', welcomeController.index);

// users resource paths:
router.get('/users',        usersController.index);
router.post('/users',       usersController.create);
router.get('/users/:id',    authController.tokenVerify, usersController.show);
router.put('/users/:id',    authController.tokenVerify, usersController.update);
router.delete('/users/:id', authController.tokenVerify, usersController.destroy)

router.post('/token', authController.userAuth);

module.exports = router;

var express = require('express'),
    router  = new express.Router();

// Require controllers.
var welcomeController = require('../controllers/welcome');
var usersController   = require('../controllers/users');

// root path:
router.get('/', welcomeController.index);

// users resource paths:
router.get('/users',        usersController.index);
router.get('/users/:id',    usersController.show);
router.post('/users',        usersController.create);
router.put('/users/:id',     usersController.update);
router.delete('/users/:id', usersController.destroy)

module.exports = router;

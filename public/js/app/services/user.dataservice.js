(function() {
  "use strict";

angular
  .module("app")
  .factory("userDataService", userDataService);

userDataService.$inject = ["$http", "$log"];

function userDataService($http, $log) {
  var user = {
    name:       "Fern",
    email:      "fern@mail.com",
    handle:     "ferny",
    password:   "12345",
    create:     create,
    clear:      clear,
  };
  return user;



  function create() {
    $log.debug('Attempting to create user:', user)

    return $http({
      method:   "POST",
      //NEED to change url to point to mongolab
      url:      "http://localhost:3000/api/users",
      headers:  {"Content-Type": "application/json"},
      data:     angular.toJson({
        email:    user.email,
        name:     user.name,
        handle:   user.handle,
        password: user.password
      })
    })
  }


  function clear() {
    $log.debug("clearing user.");

    user.email    = "";
    user.name     = "";
    user.handle   = "";
    user.password = "";

  }

};

})();

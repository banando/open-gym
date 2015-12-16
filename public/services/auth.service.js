(function () {
  "use strict";

  angular
    .module("app")
    .factory("authService", authService);

  authService.$inject = ["$log", "tokenService", "$http"];

  function authService ($log, tokenService, $http) {

    var auth = {
      logIn:      logIn,
      logOut:     logOut,
      isLoggedIn: false
    };
    auth.isLoggedIn = (tokenService.get() !== null);

    return auth;

    function logIn(credentials) {
      return $http({
        method:   'POST',
        url:      'http://localhost:3000/api/token',
        header:   {"Content-Type": "application/json"},
        data:     credentials
      }).then(function (response) {
        tokenService.set(response.data.token);
        auth.isLoggedIn = true;
        return response;
      })
    }
    function logOut() {
      tokenService.clear();
      auth.isLoggedIn = false;
    }
  }

})();

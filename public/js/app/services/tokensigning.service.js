(function() {
  "use strict";

  angular
    .module('app')
    .factory("tokenSigningService", tokenSigningService);

  tokenSigningService.$inject = ["tokenService", "$log", '$location', '$q'];

  function tokenSigningService(tokenService, $log, $location, $q) {
    return {
      request:       signWithToken
      responseError: redirectToLogin
    };

    function signWithToken(request) {
      var token = tokenService.get();
      if (token) {
        $log.log("Token exists, signing request.");
        request.headers['Authoriztion'] = `Bearer ${token}`
      }
      return request;
    }

    function redirectToLogin(response) {
      if (response.status == 403) {
        tokenService.clear();
        $location.path('/login');
      }

      return $q.reject(response);
    }


  }
})();

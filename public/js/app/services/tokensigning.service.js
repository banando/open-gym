(function() {
  "use strict";

  angular
    .module('app')
    .factory("tokenSigningService", tokenSigningService);

  tokenSigningService.$inject = ["tokenService", "$log"];

  function tokenSigningService(tokenService, $log) {
    return {
      request: signWithToken
    };

    function signWithToken(request) {
      var token = tokenService.get();
      if (token) {
        $log.log("Token exists, signing request.");
        request.headers['Authoriztion'] = `Bearer ${token}`
      }
      return request;
    }
  }
})();

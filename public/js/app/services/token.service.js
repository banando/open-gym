(function () {
  "use strict";

  angular
    .module('app')
    .factory('tokenService', tokenService);

    tokenService.$inject = ["$window", "$log"];

    function tokenService($window, $log) {
      var token = {
        set:    set,
        get:    get,
        clear:  clear,
        log:    log
      }
      return token;

      function set(value) {
        $window.localStorage.setItem('token', value);
      }
      function get() {
        return $window.localStorage.getItem('token');
      }
      function clear() {
        $window.localStorage.removeItem('token');
      }
      function log() {
        $log.log("Token: ", token.get());
      }

    }


})();

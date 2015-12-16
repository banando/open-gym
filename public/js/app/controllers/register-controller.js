(function() {
  "use strict";


  angular
    .module('app')
    .controller("RegisterController", RegisterController);

  RegisterController.$inject = ['$state', 'userDataService', '$log', 'authService'];

  function RegisterController($state, userDataService, $log, authService){
    var vm    = this;
    vm.auth   = authService;
    vm.user   = userDataService;

    vm.login = {
      handle:   "ferny",
      password: "12345"
    };

    vm.logInUser = function () {
      $log.log("logging in : ", vm.login)
      var pr = vm.auth.logIn(vm.login)
    };

    vm.createUser = function() {
      var pr = vm.user.create();

      pr.then(
        function(data, status, headers, config) {
          $log.log("Success", data);

          $log.log(angular.toJson(data.data));
          vm.user.clear();
          $state.go('home');
        },
        function(data, status, headers, config) {
          $log.log("Failure", data);

          $log.log(angular.toJson(data.data));
        }
      );
    }
  }

})();

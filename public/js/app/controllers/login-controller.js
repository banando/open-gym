(function() {
  "use strict";


  angular
    .module('app')
    .controller("LoginController", LoginController);

  LoginController.$inject = ["$state", "userDataService", "$log", "authService"];

  function LoginController($state, userDataService, $log, authService){
    var vm = this;

    vm.user   = {
      handle:   "ferny3",
      password: "12345"
    }
    vm.logIn  = logIn;
    vm.auth   = authService;


    function logIn() {
      vm.auth
        .logIn(vm.user)
        .then(function() {
          $state.go('home');
        });
    };



  };




})();

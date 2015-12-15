(function() {
  "use strict";


  angular
    .module('app')
    .controller("LoginController", LoginController);

  LoginController.$inject = ["$state", "userDataService", "$log"];

  function LoginController($state, userDataService, $log){
    var vm = this;

    vm.user   = userDataService;
    vm.logIn  = login;

    vm.userHold = {
      handle:   ""
    }

    function login(name) {
      $log.debug("logging in :", vm.userHold.name);

      vm.user.handle    = vm.userHold.name;
      vm.userHold.handle= "";


      //$state.go('');
    }

  };




})();

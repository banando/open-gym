(function() {
  "use strict";


  angular
    .module('app')
    .controller("MainController", MainController);

  MainController.$inject = ['$state', 'userDataService', '$log', "authService", "tokenService"];

  function MainController($state, userDataService, $log, authService, tokenService){
    var vm = this;

    vm.user   = userDataService;
    vm.logOut = logOut;
    vm.auth   = authService;
    vm.token  = tokenService;


    function logOut() {
      $log.debug("logging out: ", vm.user.name);

      vm.user.name    = "";
      vm.user.handle  = "";
      vm.user.email   = "";
      vm.user.password= "";
    }


    vm.$state = $state;

  }

})();
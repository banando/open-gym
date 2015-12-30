(function() {
  "use strict";


  angular
    .module('app')
    .controller("MainController", MainController);

  MainController.$inject = ['$state', 'userDataService', '$log', "authService", "tokenService", "uiGmapgoogle-map"];

  function MainController($state, userDataService, $log, authService, tokenService, uiGmapGoogleMapApi){
    var vm = this;

    vm.user   = userDataService;
    vm.logOut = logOut;
    vm.auth   = authService;
    vm.token  = tokenService;
    vm.map    = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8
    };

    function logOut() {
      $log.debug("logging out: ", vm.user.name);

      vm.user.name    = "";
      vm.user.handle  = "";
      vm.user.email   = "";
      vm.user.password= "";
    }


    vm.$state = $state;
    uiGmapGoogleMapApi.then(function(maps) {

    });

  }

})();

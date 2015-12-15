(function() {
  "use strict";


  angular
    .module('app')
    .controller("MainController", MainController);

  MainController.$inject = ['$state', 'userDataService', '$log'];

  function MainController($state, userDataService, $log){
    var vm = this;

    vm.user   = userDataService;
    vm.logOut = logOut;

    vm.createUser = function() {
      var pr = vm.user.create();

      pr.then(
        function(data, status, headers, config) {
          $log.log("Success", data);

          $log.log(angular.toJson(data.data));
          vm.user.clear();
        },
        function(data, status, headers, config) {
          $log.log("Failure", data);

          $log.log(angular.toJson(data.data));
        }
      );
    }


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

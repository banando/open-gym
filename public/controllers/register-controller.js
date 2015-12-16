(function() {
  "use strict";


  angular
    .module('app')
    .controller("RegisterController", RegisterController);

  RegisterController.$inject = ['$state', 'userDataService', '$log'];

  function RegisterController($state, userDataService, $log){
    var vm = this;

    vm.user   = userDataService;

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

(function() {
  "use strict";


  angular
    .module('app')
    .controller("MainController", MainController);

  MainController.$inject = ['$state', 'userDataService', '$log', "authService", "tokenService", "uiGmapGoogleMapApi"];

  function MainController($state, userDataService, $log, authService, tokenService, uiGmapGoogleMapApi){
    var vm = this;

    vm.user   = userDataService;
    vm.logOut = logOut;
    vm.auth   = authService;
    vm.token  = tokenService;
    vm.map    = {
      center : {
        latitude: 34,
        longitude: -118
      },
      zoom: 6
    };

    function logOut() {
      $log.debug("logging out: ", vm.user.name);

      vm.user.name    = "";
      vm.user.handle  = "";
      vm.user.email   = "";
      vm.user.password= "";
    }
    var map;
    var geocoder = new google.maps.Geocoder;
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
        vm.map = {
          center: {latitude: position.coords.latitude, longitude: position.coords.longitude},
          zoom: 10
          };
      });
    };




    uiGmapGoogleMapApi.then(function(maps) {

    });

  }

})();

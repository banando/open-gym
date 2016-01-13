(function() {
  "use strict";


  angular
    .module('app')
    .controller("MainController", MainController);

  MainController.$inject = ['$state', 'userDataService', '$log', "authService", "tokenService", "uiGmapGoogleMapApi", "$http"];

  function MainController($state, userDataService, $log, authService, tokenService, uiGmapGoogleMapApi, $http){
    var vm = this;

    vm.user   = userDataService;
    vm.logOut = logOut;
    vm.auth   = authService;
    vm.token  = tokenService;
    vm.marker = {
      windowOptions: {
        visible: true
      },
      icon : {
        url : "/assets/ballicon2.png",
        scaledSize: {height: 50, width: 50}
      },
      title:  "You are here.",
      id:     "1"
    };
    vm.courts = [];

    vm.onClick = function() {
      console.log(vm.marker);
      vm.marker.windowOptions.visible = !vm.marker.windowOptions.visible;
    };
    vm.closeClick = function () {
      vm.marker.windowOptions.visible = false;
    };


    function logOut() {
      $log.debug("logging out: ", vm.user.name);

      vm.user.name    = "";
      vm.user.handle  = "";
      vm.user.email   = "";
      vm.user.password= "";
    }

    function randomString(length){
      var result = "";
      var possible = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
      for (var i = 0; i < length; i++) {
        result += possible.charAt(Math.floor(Math.random() * possible.length));
      };
      return result;
    }

    var map;
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        yelpCall(position);
        console.log(position);
        vm.marker.coord = {latitude: position.coords.latitude, longitude: position.coords.longitude}
        vm.map = {
          center: {latitude: position.coords.latitude, longitude: position.coords.longitude},
          zoom: 12
          };
      });

    };
    function yelpCall (position) {
      var method = "GET";
      var url    = "https://api.yelp.com/v2/search";
      var params = {
        callback: 'angular.callbacks._0',
        ll: position.coords.latitude + ',' + position.coords.longitude,
        oauth_consumer_key: "6a42RgFrThDODyLQxWbNuA",
        oauth_token: "zMDrkoyu_3Gwt4FAjopisZpVG2Z-YV6w",
        oauth_signature_method: "HMAC-SHA1",
        oauth_timestamp: new Date().getTime(),
        oauth_nonce: randomString(32),
        category_filter: "basketballcourts",
      };
      var consumerSecret = "1WDCxcRCfi-q_WwcpvZTDYBJ9yU";
      var tokenSecret = "BsleiqAMY-IVbsM0AhjA83P549A";
      var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, {encodeSignature: false});
      params['oauth_signature'] = signature;
      $http.jsonp(url, {params: params}).success(function(data){
          vm.courts = data.businesses;
          console.log(data);
      });
    };





    uiGmapGoogleMapApi.then(function(maps) {
      vm.maps = maps;
      console.log(maps);
    });

  }

})();

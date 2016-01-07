(function () {
  "use strict";

  angular
    .module("app")
    .config(configure, map);


  configure.$inject = ["$httpProvider"];
  map.$inject = ["uiGmapGoogleMapApiProvider"];

  function map(uiGmapGoogleMapApiProviders){
    uiGmapGoogleMapApiProviders.configure({
      key:    'AIzaSyBYNbyEqD66pKe-9TQ1QNqWZhT9S0kuIw4',
      libraries: 'weather,geometry,visualization'
    });
  };


  function configure($httpProvider) {
    $httpProvider.interceptors.push("tokenSigningService");
  }
})();

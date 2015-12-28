(function () {
  "use strict";

  angular
    .module("app")
    .config(configure)
    .config(maps);

  configure.$inject = ["$httpProvider"];
//  maps.$inject = ["uiGmapGoogleMapApiProvider"];

  function configure($httpProvider) {
    $httpProvider.interceptors.push("tokenSigningService");
  }
  function maps(uiGmapGoogleMapApiProvider) {
    key : process.env(GOOGLE_KEY),
    v:    '3.20',
    libraries:  'weather,geometry,visualization'
  }
})();

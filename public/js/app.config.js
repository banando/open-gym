(function () {
  "use strict";

  angular
    .module("app")
    .config(map)
    .config(configure);

  configure.$inject = ["$httpProvider"];
  map.$inject = ["uiGmapGoogleMapApiProvider"];

  function map(uiGmapGoogleMapApiProviders){
    uiGmapGoogleMapApiProviders.configure({
      key:    process.env.GOOGLE_KEY,
      libraries: 'weather,geometry,visualization'
    });
  };


  function configure($httpProvider) {
    $httpProvider.interceptors.push("tokenSigningService");
  }
})();

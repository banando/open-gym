(function() {
  angular
    .module('app')
    .config(router);

    router.$inject = ["$stateProvider", "$urlRouterProvider"];

    function router($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url:  "/home",
          templateUrl:  "templates/home.html"
        })
        .state('login', {
          url: "/login",
          templateUrl: "templates/login.html",
          controller:   "LoginController",
          controllerAs:   "loginCtrl"
        })
        .state('register', {
          url:          "/register",
          templateUrl:  "templates/register.html",
          controller:   "RegisterController",
          controllerAs: "registerCtrl"
        })
    };
})();


// inject 'ui.router', 'ngResource'

(function(){
  'use strict';

  angular
    .module('app')
    .controller("MapController", MapController);

    MapController.$inject = ['uiGmapGoogleMapApi'];

    function MapController(uiGmapGoogleMapApi){
      var vm = this;

      this.map = {
        center : {
          latitude: 45,
          longitude: -73
        },
        zoom : 8
      };

      uiGmapGoogleMapApi.then(function(maps) {

      });
    };
})();

var map;

function initMap() {
  var geocoder = new google.maps.Geocoder;
  if(navigator.geolocation) {
    browserSupportSlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: position.coords.latitude, lng: position.coords.longitude},
        zoom: 16
      });
      currentLocation = new google.maps.Marker({
        position: {lat: position.coords.latitude, lng: position.coords.longitude},
        map: map,
        title: 'you'
      });

    })

  }
}

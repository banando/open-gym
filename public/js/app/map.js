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

      $ajax({
        url: "https://api.yelp.com/v2/search/?location=Los Angeles,CA&category_filter=basketballcourts&oauth_consumer_key=6a42RgFrThDODyLQxWbNuA&oauth_token=zMDrkoyu_3Gwt4FAjopisZpVG2Z-YV6w&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1450203070&oauth_nonce=B1m5td&oauth_version=1.0&oauth_signature=/KDnY/rZzhfbGm/OmwHm62A2GNw=",
        type: "get",
        headers: {
          "oauth_consumer_key" :    '6a42RgFrThDODyLQxWbNuA',
          "oauth_consumer_secret":  '1WDCxcRCfi-q_WwcpvZTDYBJ9yU',
          "oauth_token":            'zMDrkoyu_3Gwt4FAjopisZpVG2Z-YV6w,'
          "oauth_token_secret":     'BsleiqAMY-IVbsM0AhjA83P549A',
          "oauth_signature_method": "hmac-sha1"
        }
        data: "json",
        success: function (data) {
          data.forEach(function(spot) {
            var adress = spot.location;
            geocoder.geocode( { 'address': address }, function(results, status) {
              if(status == google.maps.GeocoderStatus.OK) {

              }
            })
          })
        }
      })
    })

  }
}

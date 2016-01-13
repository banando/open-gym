var map;
var courts = {
    region: {
        span: {
            latitude_delta: 0.146301983143573,
            longitude_delta: 0.33587831673881396
        },
        center: {
            latitude: 34.0671948985711,
            longitude: -118.259817837846
        }
    },
    total: 21,
    businesses: [
        {
            is_claimed: true,
            rating: 5.0,
            mobile_url: "http://m.yelp.com/biz/la-ballers-los-angeles?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=6a42RgFrThDODyLQxWbNuA",
            rating_img_url: "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
            review_count: 16,
            name: "LA Ballers",
            rating_img_url_small: "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
            url: "http://www.yelp.com/biz/la-ballers-los-angeles?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=6a42RgFrThDODyLQxWbNuA",
            categories: [
                [
                    "Basketball Courts",
                    "basketballcourts"
                ],
                [
                    "Amateur Sports Teams",
                    "amateursportsteams"
                ],
                [
                    "Sports Clubs",
                    "sports_clubs"
                ]
            ],
            phone: "2136328021",
            snippet_text: "This league is now 7 seasons deep and I am fortunate enough, thanks to a good solid team, be the first LAB team to repeat a championship. However, both of...",
            image_url: "http://s3-media1.fl.yelpcdn.com/bphoto/TUxqA3vwg-MqUbRXfv_bNw/ms.jpg",
            snippet_image_url: "http://s3-media1.fl.yelpcdn.com/photo/-DcRBSnacakXAtrrHMQlQw/ms.jpg",
            display_phone: "+1-213-632-8021",
            rating_img_url_large: "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png",
            id: "la-ballers-los-angeles",
            is_closed: false,
            location: {
                city: "Los Angeles",
                display_address: [
                    "2630 Pepper Ave",
                    "Cypress Park",
                    "Los Angeles, CA 90065"
                ],
                geo_accuracy: 8.0,
                neighborhoods: [
                    "Cypress Park"
                ],
                postal_code: "90065",
                country_code: "US",
                address: [
                    "2630 Pepper Ave"
                ],
                coordinate: {
                    lat: 34.0895113348961,
                    lng: -118.225745111704
                },
                state_code: "CA"
            }
        },
        {
            is_claimed: false,
            rating: 4.0,
            mobile_url: "http://m.yelp.com/biz/outdoor-basketball-courts-los-angeles?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=6a42RgFrThDODyLQxWbNuA",
            rating_img_url: "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            review_count: 1,
            name: "Outdoor Basketball Courts",
            rating_img_url_small: "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            url: "http://www.yelp.com/biz/outdoor-basketball-courts-los-angeles?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=6a42RgFrThDODyLQxWbNuA",
            categories: [
                [
                    "Basketball Courts",
                    "basketballcourts"
                ]
            ],
            snippet_text: "This is a cool basketball court to come and ball up at.  Its hidden and kept up by the city so I appreciate it.  Definitely lots of parking, would love to...",
            image_url: "http://s3-media1.fl.yelpcdn.com/bphoto/x4EA3-GaKtclq6cT1Dk8IA/ms.jpg",
            snippet_image_url: "http://s3-media2.fl.yelpcdn.com/photo/VuOw6uvH_sbRg35SfCT4QQ/ms.jpg",
            rating_img_url_large: "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            id: "outdoor-basketball-courts-los-angeles",
            is_closed: false,
            location: {
                city: "Los Angeles",
                display_address: [
                    "1914 1/2 Riverside Dr",
                    "Echo Park",
                    "Los Angeles, CA 90039"
                ],
                geo_accuracy: 9.5,
                neighborhoods: [
                    "Echo Park"
                ],
                postal_code: "90039",
                country_code: "US",
                address: [
                    "1914 1/2 Riverside Dr"
                ],
                coordinate: {
                    lat: 34.0968229426183,
                    lng: -118.246563519658
                },
                state_code: "CA"
            }
        },
        {
            is_claimed: false,
            rating: 4.0,
            mobile_url: "http://m.yelp.com/biz/silver-lake-basketball-court-los-angeles?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=6a42RgFrThDODyLQxWbNuA",
            rating_img_url: "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            review_count: 1,
            name: "Silver Lake Basketball Court",
            rating_img_url_small: "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            url: "http://www.yelp.com/biz/silver-lake-basketball-court-los-angeles?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=6a42RgFrThDODyLQxWbNuA",
            categories: [
                [
                    "Basketball Courts",
                    "basketballcourts"
                ]
            ],
            snippet_text: "Love coming here to play basketball.  Its one of maybe 4 outdoor basketball courts within a 2 miles.  The times here vary though, on weekdays I think its...",
            image_url: "http://s3-media3.fl.yelpcdn.com/bphoto/VPc_-25I3ejkhE1up_InbQ/ms.jpg",
            snippet_image_url: "http://s3-media2.fl.yelpcdn.com/photo/VuOw6uvH_sbRg35SfCT4QQ/ms.jpg",
            rating_img_url_large: "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            id: "silver-lake-basketball-court-los-angeles",
            is_closed: false,
            location: {
                city: "Los Angeles",
                display_address: [
                    "2901-2999 Van Pelt Pl",
                    "Silver Lake",
                    "Los Angeles, CA 90026"
                ],
                geo_accuracy: 9.5,
                neighborhoods: [
                    "Silver Lake"
                ],
                postal_code: "90026",
                country_code: "US",
                address: [
                    "2901-2999 Van Pelt Pl"
                ],
                coordinate: {
                    lat: 34.0919641051777,
                    lng: -118.2659614716
                },
                state_code: "CA"
            }
        }

    ]
}


function initMap() {
  var icon = {
    url: "/assets/ballicon2.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};

  var geocoder = new google.maps.Geocoder;
  if(navigator.geolocation) {
    browserSupportSlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: position.coords.latitude, lng: position.coords.longitude},
        zoom: 10
      });
      currentLocation = new google.maps.Marker({
        position: {lat: position.coords.latitude, lng: position.coords.longitude},
        map: map,
        title: 'you',
        animation: google.maps.Animation.BOUNCE,
        icon: icon
      });

      // $.ajax({
      //   url: "https://api.yelp.com/v2/search/",
      //   type: "get",
      //   headers: {
      //     "ll":                     position.coords.latitude+','+position.coords.longitude,
             // "category_filter":        basketballcourts,
             // "oauth_nonce":
      //     "oauth_consumer_key" :    '6a42RgFrThDODyLQxWbNuA',
      //     "oauth_consumer_secret":  '1WDCxcRCfi-q_WwcpvZTDYBJ9yU',
      //     "oauth_token":            'zMDrkoyu_3Gwt4FAjopisZpVG2Z-YV6w',
      //     "oauth_token_secret":     'BsleiqAMY-IVbsM0AhjA83P549A',
      //     "oauth_signature_method": "hmac-sha1"
      //   },
      //   data: "json",
      //   success: function (data) {
      //     data.forEach(function(spot) {
      //       var adress = spot.location;
      //       geocoder.geocode( { 'address': address }, function(results, status) {
      //         if(status == google.maps.GeocoderStatus.OK) {

      //         }
      //       })
      //     })
      //   }
      // });

      courts.businesses.forEach(function(court) {
        var marker = new google.maps.Marker({
          map: map,
          position: court.location.coordinate,
          icon: '/assets/hoop.png'
        });;
        var infowindow = new google.maps.InfoWindow({
            content: court.name
        });
        marker.addListener('mouseover', function() {
            infowindow.open(map, marker);
        });
        marker.addListener('mouseout', function() {
            infowindow.close(map, marker);
        });

      })
    })
  }

}




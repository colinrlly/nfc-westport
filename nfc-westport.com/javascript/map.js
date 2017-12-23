function initialize() {
	var myLatLng = new google.maps.LatLng(41.123094, -73.371053);
	var map_canvas = document.getElementById('map_canvas');
	var map_options = {
 	 center: myLatLng,
 	 zoom: 15,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(map_canvas, map_options)
	var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
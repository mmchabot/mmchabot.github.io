// Nav Bar Animation //

// $('.list-item').click(function() {
// 	var scrollTo = $(this).attr('')
//     $('html, body').animate({
//         scrollTop: $(scrollTo).offset().top
//     }, 1000);
// });


$('#nav-map').click(function() {
    $('html, body').animate({
        scrollTop: $('#wrapper').offset().top
    }, 1000);
});

$('#coffee').click(function() {
    $('html, body').animate({
        scrollTop: $('#coffee-list').offset().top
    }, 1000);
});

$('#libations').click(function() {
    $('html, body').animate({
        scrollTop: $('#libations-list').offset().top
    }, 1000);
});

$('#eats').click(function() {
    $('html, body').animate({
        scrollTop: $('#eats-list').offset().top
    }, 1000);
});

// Header Slideshow Carousel //

$(document).ready(function() {
	$('#slideshow').cycle({
	fx: 'fade',
	pager: '#smallnav',
	pause:   1,
	speed: 1500,
	timeout:  3500
	});
});

// Map //

var map;
var markersArray = []
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 40.7264, lng: -73.9818},		
	zoom: 15
	});
}

initMap ()

// Coffee Markers //

$('#coffee-topic').click(coffeeMarkers)

function coffeeMarkers() {

	map.clearOverlays()	

	var marker1 = new google.maps.Marker({
		position: {lat: 40.7250288, lng: -73.9799909},
		map: map,
		title: 'Ninth Street Espresso'
	});

	var marker2 = new google.maps.Marker({
		position: {lat: 40.7271033, lng: -73.9830377},
		map: map,
		title: 'Three Seat Espresso'
	});

	var marker3 = new google.maps.Marker({
		position: {lat: 40.7270891, lng: -73.9800874},
		map: map,
		title: 'Ninth Street Espresso - Tompkins Sq Park'
	});

	var marker4 = new google.maps.Marker({
		position: {lat: 40.7216944, lng: -73.9896399},
		map: map,
		title: 'Ludlow Coffee Supply'
	});

	markersArray.push(marker1, marker2, marker3, marker4)
}

google.maps.Map.prototype.clearOverlays = function() {
  for (var i = 0; i < markersArray.length; i++ ) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
}

// Libations Markers //

$('#libations-topic').click(libationMarkers)

function libationMarkers() {

	map.clearOverlays()

	var marker1 = new google.maps.Marker({
		position: {lat: 40.7251221, lng: -73.977889},
		map: map,
		title: 'The Wayland'
	});

	var marker2 = new google.maps.Marker({
		position: {lat: 40.7250535, lng: -73.9814144},
		map: map,
		title: '7B'
	});

	var marker3 = new google.maps.Marker({
		position: {lat: 40.7250575, lng: -73.9836031},
		map: map,
		title: 'Death & Company'
	});

	var marker4 = new google.maps.Marker({
		position: {lat: 40.7300124, lng: -73.9804447},
		map: map,
		title: 'The Horsebox'
	});

	var marker5 = new google.maps.Marker({
		position: {lat: 40.7299749, lng: -73.983115},
		map: map,
		title: 'Drop Off Service'
	});

	var marker6 = new google.maps.Marker({
		position: {lat: 40.7236962, lng: -73.9810749},
		map: map,
		title: 'Lois'
	});

	markersArray.push(marker1, marker2, marker3, marker4, marker5, marker6)
}

// // Eats Markers //

$('#eats-topic').click(eatsMarkers)

function eatsMarkers() {

	map.clearOverlays()

	var marker1 = new google.maps.Marker({
		position: {lat: 40.729436, lng: -73.9834862},
		map: map,
		title: 'Bakers Pizza'
	});

	var marker2 = new google.maps.Marker({
		position: {lat: 40.7235935, lng: -73.9789764},
		map: map,
		title: 'Bobwhite Lunch & Supper Counter'
	});

	var marker3 = new google.maps.Marker({
		position: {lat: 40.7205657, lng: -73.9852231},
		map: map,
		title: 'Ivan Ramen'
	});

	markersArray.push(marker1, marker2, marker3)

}










// Nav Bar Dropdown - Coffee//

// $('#coffee-content').hide();

// $('#coffee').mouseover(function () {
//     $('#coffee-content').slideDown(700);
// });

// $('#coffee').mouseleave(function () {
//     $('#coffee-content').slideUp(700);
// });

// // Nav Bar Dropdown - Libations //

// $('#libations-content').hide();

// $('#libations').mouseover(function () {
//     $('#libations-content').slideDown(700);
// });

// $('#libations').mouseleave(function () {
//     $('#libations-content').slideUp(700);
// });

// // Nav Bar Dropdown - Eats //

// $('#eats-content').hide();

// $('#eats').mouseover(function () {
//     $('#eats-content').slideDown(700);
// });

// $('#eats').mouseleave(function () {
//     $('#eats-content').slideUp(700);
// });


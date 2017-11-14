// // PSEUDO CODE

// // On home page, background picture rotates
// // Each shows for 5 seconds then fades to the next

// // For maps feature
// // User clicks on a topic - bars, restaurants, coffee shops
// // Google Maps that is shown changes to specific map for that topic, with pins

$(document).ready(function() {
	$('#slideshow').cycle({
	fx: 'fade',
	pager: '#smallnav',
	pause:   1,
	speed: 1500,
	timeout:  3500
	});
});

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 40.7264, lng: -73.9818},
	zoom: 15
	});

	var marker = new google.maps.Marker({
		position: {lat: 40.7250288, lng: -73.9799909},
		map: map,
		title: 'Ninth Street Espresso'
	});

	var marker = new google.maps.Marker({
		position: {lat: 40.7271033, lng: -73.9830377},
		map: map,
		title: 'Three Seat Espresso'
	});


}

initMap ()



// Nav Bar Dropdown //

$('.dropdown-content').hide();

$('.dropdown').mouseover(function () {
    $('.dropdown-content').slideDown('slow');
});

$('.dropdown').mouseleave(function () {
    $('.dropdown-content').slideUp('slow');
});


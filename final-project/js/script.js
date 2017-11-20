// Nav Bar Animation //

// $('.list-item').click(function() {
// 	var scrollTo = $(this).attr('')
//     $('html, body').animate({
//         scrollTop: $(scrollTo).offset().top
//     }, 1000);
// });


$('#about').click(function() {
    $('html, body').animate({
        scrollTop: $('#aside').offset().top
    }, 1000);
});

$('#coffee').click(function() {
    $('html, body').animate({
        scrollTop: $('#coffee-topic').offset().top
    }, 1000);
});

$('#libations').click(function() {
    $('html, body').animate({
        scrollTop: $('#libations-topic').offset().top
    }, 1000);
});

$('#eats').click(function() {
    $('html, body').animate({
        scrollTop: $('#eats-topic').offset().top
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

// Coffee Map //

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('coffee-map'), {
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

	var marker = new google.maps.Marker({
		position: {lat: 40.7290851, lng: -73.978516},
		map: map,
		title: 'The Roost'
	});

}

initMap ()

// Libations Map //

var libationsMap;
function initLibationsMap() {
	libationsMap = new google.maps.Map(document.getElementById('libations-map'), {
	center: {lat: 40.7264, lng: -73.9818},
	zoom: 15
	});

	var marker = new google.maps.Marker({
		position: {lat: 40.7251221, lng: -73.977889},
		map: libationsMap,
		title: 'The Wayland'
	});

	var marker = new google.maps.Marker({
		position: {lat: 40.7250535, lng: -73.9814144},
		map: libationsMap,
		title: '7B'
	});

	var marker = new google.maps.Marker({
		position: {lat: 40.7250575, lng: -73.9836031},
		map: libationsMap,
		title: 'Death & Company'
	});

}

initLibationsMap ()

// Eats Map //

var eatsMap;
function initEatsMap() {
	eatsMap = new google.maps.Map(document.getElementById('eats-map'), {
	center: {lat: 40.7264, lng: -73.9818},
	zoom: 15
	});

	var marker = new google.maps.Marker({
		position: {lat: 40.729436, lng: -73.9834862},
		map: eatsMap,
		title: 'Bakers Pizza'
	});

	var marker = new google.maps.Marker({
		position: {lat: 40.7235935, lng: -73.9789764},
		map: eatsMap,
		title: 'Bobwhite Lunch & Supper Counter'
	});

	var marker = new google.maps.Marker({
		position: {lat: 40.7205657, lng: -73.9852231},
		map: eatsMap,
		title: 'Ivan Ramen'
	});

}

initEatsMap ()







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


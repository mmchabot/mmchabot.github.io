$(window).resize(function () {

    if ($(window).width() >= 1000) {
      $('#mobile-nav').hide();
    }	
})


$('#burger').click(showNav)

function showNav () {
	$('#mobile-nav').slideToggle()
}
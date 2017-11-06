$('#fahrenheit').keyup(convertFahrenheit);
$('#celsius').keyup(convertCelsius);

function convertFahrenheit() {
	var fahrenheit = $('#fahrenheit').val();
	var celsius = (fahrenheit - 32) / 1.8;
	$('#celsius').val(celsius);

if (fahrenheit <= 32) {
	$('body').css('background-color', 'blue');
} else if (fahrenheit <= 68) {
	$('body').css('background-color', 'orange');
} else if (fahrenheit > 68){
	$('body').css('background-color', 'red');
}
}

function convertCelsius() {
	var celsius = $('#celsius').val();
	var fahrenheit = (celsius * 1.8) + 32;
	$('#fahrenheit').val(fahrenheit);

if (celsius <= 0) {
	$('body').css('background-color', 'blue');
} else if (celsius <= 20) {
	$('body').css('background-color', 'orange');
} else if (celsius > 20){
	$('body').css('background-color', 'red');
}
}


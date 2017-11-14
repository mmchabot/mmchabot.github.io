$('#myForm').submit(handleSubmit);

function handleSubmit (event) {
	event.preventDefault();

	console.log(event);

	var name = $('#name-input').val();

	$('#target').html(name);
}
$.ajax({
	type:'GET',
	url: 'https://api.spacexdata.com/v2/launches',
	success:function(data) {
	console.log(data)
	data.forEach(showLaunches)
	},
});

function showLaunches (data) {
	var image = data.links.mission_patch;
	$('#root')
	.append('<div>Flight number: ' + data.flight_number + '</div>')
	.append('<div>Launch year: ' + data.launch_year + '</div>')
	.append('<div>' + '<img src= ' + image + '</>' + '</div>');
}

showLaunches();
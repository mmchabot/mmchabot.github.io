// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

//$('#first').click(firstImage);
//$('#second').click(secondImage);
//$('#third').click(thirdImage);
//$('#fourth').click(fourthImage);

//function firstImage () {
// 	$('#bigimage').attr('src', 'img/1.jpg');
// }

// function secondImage () {
// 	$('#bigimage').attr('src', 'img/2.jpg');
// }

// function thirdImage () {
// 	$('#bigimage').attr('src', 'img/3.jpg');
// }

// function fourthImage () {
// 	$('#bigimage').attr('src', 'img/4.jpg');
// }


$('.thumb').click(changeImage);

function changeImage () {
	var newImage = $(this).attr('src');
	$('#bigimage').attr('src', newImage);
}


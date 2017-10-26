var total = 0;

//click on #a10
$('#a10').click(add10);

function add10() {
	total = total + 10;
	$('#out').html(total);
	//add 10 to 'total'
	//output updated 'total' to #out
}

//click on #a20
$('#a20').click(add20);

function add20() {
	total = total + 20;
	$('#out').html(total);
}

//click on #a30
$('#a30').click(add30);

function add30() {
	total = total + 30;
	$('#out').html(total);
}

//click on #n10
$('#n10').click(subtract10);

function subtract10() {
	total = total - 10;
	$('#out').html(total);
}

//click on #n20
$('#n20').click(subtract20);

function subtract20() {
	total = total - 20;
	$('#out').html(total);
}

//click on #n30
$('#n30').click(subtract30);

function subtract30() {
	total = total - 30;
	$('#out').html(total);
}

//click on #red
$('#red').click(redBackground);

function redBackground() {
	$('#out').css('background', 'red');
}

//click on #blue
$('#blue').click(blueBackground);

function blueBackground() {
	$('#out').css('background', 'blue');
}

//click on #out
$('#out').click(clearAll);

function clearAll() {
	total = 0;
	$('#out').html(total);
	$('#out').css('background', 'white')
}



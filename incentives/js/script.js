function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}


document.getElementById('calculate').onclick = function() {



	function calculate(placements, payout) {

	if (placements < 2) {
		payout.innerHTML = '$0';
	} else if (placements >= 2 && placements <= 4) {
		payout.innerHTML = '$25';
	} else if (placements > 4 && placements <= 9) {
		payout.innerHTML = '$50';
	} else if (placements > 9 && placements <= 14) {
		payout.innerHTML = '$100';
	} else if (placements > 14 && placements <= 19) {
		payout.innerHTML = '$150';
	} else if (placements > 19 && placements <= 24) {
		payout.innerHTML = '$200';
	}
}

	

	
	document.querySelectorAll('input.placements').forEach(function(placements) {
		var kitty = placements.getAttribute('for');
		var payout = document.getElementById(kitty);

		placements = parseInt(placements.value);

		createCookie(kitty, placements, 12);
		calculate(placements, payout);
	});

}

	document.querySelectorAll('input.placements').forEach(function(placements) {
		var kitty = placements.getAttribute('for');


		var value = readCookie(kitty);

		if (value != null) {
			placements.value = value;
		}
	});

	





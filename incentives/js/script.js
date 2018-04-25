document.getElementById('calculate').onclick = function() {

	var keenanPlacements = document.getElementById('keenan-placements').value;
	var keenanPayout = document.getElementById('keenan');

	keenanPlacements = parseInt(keenanPlacements);	

	console.log(keenanPlacements);

	if (keenanPlacements >= 2 && keenanPlacements <= 4) {
		keenanPayout.innerHTML = '$25';
	} else if (keenanPlacements > 4 && keenanPlacements <= 9) {
		keenanPayout.innerHTML = '$50';
	} else if (keenanPlacements > 9 && keenanPlacements <= 14) {
		keenanPayout.innerHTML = '$75';
	}

	var angelPlacements = document.getElementById('angel-placements').value;
	var angelPayout = document.getElementById('angel');

	angelPlacements = parseInt(angelPlacements);	

	console.log(angelPlacements);

	if (angelPlacements >= 2 && angelPlacements <= 4) {
		angelPayout.innerHTML = '$25';
	} else if (angelPlacements > 4 && angelPlacements <= 9) {
		angelPayout.innerHTML = '$50';
	} else if (angelPlacements > 9 && angelPlacements <= 14) {
		angelPayout.innerHTML = '$75';
	}

}







	// if (2 <= keenanPlacements <= 4) {
	// 	keenanPayout.innerHTML = '$' + 25;
	// } else if (4 < keenanPlacements <= 9) {
	// 	keenanPayout.innerHTML = '$' + 50;
	// } else if (9 < keenanPlacements <= 14) {
	// 	keenanPayout.innerHTML = '$' + 75;
	// }
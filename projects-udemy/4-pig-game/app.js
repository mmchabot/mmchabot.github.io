/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, previousRoll;

init();

document.querySelector('.btn-roll').onclick = function() {
	
	if (gamePlaying) {
		//random number is selected and shown on dice	
		var dice = Math.floor(Math.random() * 6) + 1;
		var diceTwo = Math.floor(Math.random() * 6) + 1;

		//store roll
		//if two sixes are rolled in a row
		//total score becomes 0
		//next player function runs

		//dice images appear
		var diceDOM = document.querySelector('.dice')
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

		var diceDOMTwo = document.querySelector('.dice-2');
		diceDOMTwo.style.display = 'block';
		diceDOMTwo.src = 'dice-' + diceTwo + '.png';


		//that random number added to active player's round score IF it is NOT a 1
		// if (previousRoll === 6 && dice === 6) {
		// 	scores[activePlayer] = 0;
		// 	document.getElementById('score-' + activePlayer).innerHTML = 0;
		// 	nextPlayer();
		// } else 
		if (dice !== 1 && diceTwo !== 1) {
			roundScore = roundScore + dice + diceTwo;
			document.getElementById('current-' + activePlayer).innerHTML = roundScore;
		} else {

		nextPlayer();
	}

	previousRoll = dice;

	}			
};

		document.querySelector('.btn-hold').onclick = function() {
			if (gamePlaying) {
				//active player's round score is added to overall score
				scores[activePlayer] += roundScore;
				//this is the same as scores[activePlayer] = scores[activePlayer] + roundScore//

				//show the new overall score
				document.getElementById('score-' + activePlayer).innerHTML = scores[activePlayer];

				var input = document.querySelector('.final-score').value;
				var winningScore;

				if (input) {
					winningScore = input;
				} else {
					winningScore = 100;
				}

				//check if active player won the game
				if (scores[activePlayer] >= winningScore) {
					// alert('Player ' + activePlayer + ', ' + 'you have won!');
					document.getElementById('name-' + activePlayer).innerHTML = 'WINNER!!';
					document.querySelector('.dice').style.display = 'none';
					document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
					document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
					gamePlaying = false;

				} else {
					//next player goes AND roundScore goes back to 0
					nextPlayer();
				}
			}
			
		};

		document.querySelector('.btn-new').onclick = init;


	function nextPlayer() {
		if (activePlayer === 0) {
		activePlayer = 1;
		} else {
			activePlayer = 0;
		}
		roundScore = 0;

		document.getElementById('current-0').innerHTML = 0;
		document.getElementById('current-1').innerHTML = 0;

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.dice-2').style.display = 'none';
	};

	function init () {
		scores = [0, 0];
		roundScore = 0;
		activePlayer = 0;
		gamePlaying = true;

		//hide dice on page load//
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.dice-2').style.display = 'none';

		//set all scores to 0 on page load//
		document.getElementById('score-0').innerHTML = 0;
		document.getElementById('score-1').innerHTML = 0;
		document.getElementById('current-0').innerHTML = 0;
		document.getElementById('current-1').innerHTML = 0;

		document.getElementById('name-0').innerHTML = 'Player 1';
		document.getElementById('name-1').innerHTML = 'Player 2';

		document.querySelector('.player-0-panel').classList.remove('winner');
		document.querySelector('.player-1-panel').classList.remove('winner');
		document.querySelector('.player-0-panel').classList.remove('active');
		document.querySelector('.player-1-panel').classList.remove('active');
		document.querySelector('.player-0-panel').classList.add('active');
		


};












function rps(player1, player2) {

  if ((player1 === 'rock' && player2 === 'scissors') || (player1 === 'scissors' && player2 === 'paper') || (player1 === 'paper' && player2 === 'rock')) {
  	return 'Player 1 Won!';
  } else if ((player2 === 'rock' && player1 === 'scissors') || (player2 === 'scissors' && player1 === 'paper') || (player2 === 'paper' && player1 === 'rock')) {
  	return 'Player 2 Won!';
  } else if (player1 === player2) {
  	return 'Draw!';
  }
};

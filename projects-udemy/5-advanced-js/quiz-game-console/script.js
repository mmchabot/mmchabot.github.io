
//Immediately invoked function (code can be shared/used by others but won't interfere. If anyone has same variables in their code)

(function() {

function Question (question, answerOptions, correctAnswer) {
	this.question = question;
	this.answerOptions = answerOptions;
	this.correctAnswer = correctAnswer
};

Question.prototype.displayQuestion = function () {
	console.log(this.question);	
	for (var i = 0; i < this.answerOptions.length; i++) {
	console.log(i + ': ' + this.answerOptions[i]);
	}
}


Question.prototype.checkAnswer = function(ans, callback) {
	var score;
	if (ans === this.correctAnswer) {
	console.log('Correct!');
	score = callback(true);
	} else {
	console.log('You are wrong!');
	score = callback(false);
	}
	this.displayScore(score);
}

Question.prototype.displayScore = function (score) {
	console.log('Your score is: ' + score);
	console.log('-----------------');
}

var javascript = new Question('Is JavaScript awesome?', ['Yes', 'No'], 0);
var kitty = new Question('Do you love little kitty Layla?', ['Nah', 'Of course'], 1);
var live = new Question('Where do I live?', ['Boston', 'Chicago', 'New York'], 2);
var questionArray = [javascript, kitty, live];

function updateScore() {
	var score = 0;
	return function(correct) {
		if (correct) {
			score++;
		}
		return score;
	}
}

var keepScore = updateScore();

function nextQuestion() {

var n = Math.floor(Math.random() * questionArray.length);

questionArray[n].displayQuestion();
var answer = prompt('Please answer this question (just type the correct number');

if (answer !== 'exit') {

	questionArray[n].checkAnswer(parseInt(answer), keepScore);

	nextQuestion();
	} 

};

nextQuestion();

})();




// read answer from user's input in prompt box
//compare answer with correctAnswer for that question
//console.log if correct or not






	
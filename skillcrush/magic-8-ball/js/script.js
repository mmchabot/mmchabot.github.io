$(document).ready(function() {

var magic8Ball = {}; 
  
  $('#answer').hide();
  
magic8Ball.listOfAnswers = ["it is certain", "it is decidedly so", "outlook good", "outlook hazy", "ask again later", "don't count on it", "my sources say no"];
  
magic8Ball.askQuestion = function(question) {
     $('#8ball').attr('src', 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png');
     $('#answer').fadeIn(4000);
     var randomNumber = Math.random();
     var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
     var randomIndex = Math.floor(randomNumberForListOfAnswers);
     var answer = this.listOfAnswers[randomIndex];
     $('#8ball').effect('shake');
     $('#answer').text(answer);
};
  
var onClick = function() { 
     $('#answer').hide();
     $('#8ball').attr('src', 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png');
  
  
  setTimeout ( 
    function() {
     var question = prompt('Ask a yes or no question!')
     magic8Ball.askQuestion(question)
    }, 500);  
};
  
$('#questionButton').click(onClick);
  
});
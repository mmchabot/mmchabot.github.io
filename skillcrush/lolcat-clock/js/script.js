var wakeUp = 9;
var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
var noon = 12;
var lunchTime = 12;
var lunchTimeSelector = document.getElementById('lunchTimeSelector');
var nap = 15;
var napTimeSelector = document.getElementById('napTimeSelector');
var evening = 17;
var party = 20;
var isPartyTime = false;
var button = document.getElementById('partyTimeButton');

var updateClock = function() {

var time = new Date().getHours();
var messageText;
var outputMessage = document.getElementById("timeEvent");
var lolCatImage = document.getElementById("lolcat");
var image = lolCatImage.src;
	
if (time == wakeUp) {
  messageText = "Wake up, it's time for pancakes!"
  image =
  "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
} else if (time == lunchTime) {
   messageText = "It's lunchtime now"
   image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
} else if (time == nap) {
  messageText = "I'm seepy, it's time for a nap"
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
} else if (time == party) {
    messageText = "Let's party!"
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
} else if (time < noon) {
  messageText = "Good morning!"
} else if (time > evening) {
  messageText = "Good evening!";
} else {
  messageText = "Good afternoon!"
}
  

outputMessage.innerText = messageText;
lolcat.src = image;

var showCurrentTime = function() {

  
//display the string on the page
var clock = document.getElementById("clock");
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var meridian = "AM";
  
//Set hours

    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
  
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime; 
};

showCurrentTime();
  
};

updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);

var partyEvent = function() {
  if (isPartyTime === false) {
    isPartyTime = true;
    time = partyTime;
    button.innerText = 'PARTY TIME!';
    button.style.backgroundColor = '#222';
  }  
  
  else {
    isPartyTime = false;
    time = new Date().getHours();
    button.innerText = 'PARTY OVER :(';
    button.style.backgroundColor = '#0A8DAB';
  }  
};

button.addEventListener('click', partyEvent);

var wakeUpEvent = function() {
  wakeUp = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

var lunchTimeEvent = function() {
  lunchTime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener('change', lunchTimeEvent);

var napTimeEvent = function() {
  nap = napTimeSelector.value;
};

napTimeSelector.addEventListener('change', napTimeEvent);
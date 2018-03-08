////Lecture 1: Function constructors


// var molly = {
// 	name: 'Molly',
// 	yearOfBirth: 1985,
// 	job: 'web developer'
// }

// var Person = function (name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// }

// Person.prototype.calculateAge = function() {
// 	console.log(2018 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Wallace';

// var molly = new Person ('Molly', 1985, 'web developer');
// //when we use the new operator, a brand new, emptpy object is created//
// var tim = new Person('Tim', 1986, 'my love');
// var layla = new Person('Layla', 2007, 'little kitty');

// molly.calculateAge();
// tim.calculateAge();
// layla.calculateAge();

// console.log(molly.lastName);
// console.log(tim.lastName);
// console.log(layla.lastName);




//Lecture 2: Object.create

// var personProto = {
// 	calculateAge: function() {
// 		console.log(2018-this.yearOfBirth);
// 	}
// };

// var molly = Object.create(personProto);

// molly.name = 'Molly';
// molly.yearOfBirth = 1985;
// molly.job = 'web developer';


// var tim = Object.create(personProto, {
// 	name: {value: 'Tim'},
// 	yearOfBirth: {value: 1986},
// 	job: {value: 'entrepreneur'}
// });





//Lecture 3: Primitives vs. Objects


//Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);



//Objects
// var obj1 = {
// 	name: 'Molly',
// 	age: 32
// };

// var obj2 = obj1;

// obj1.age = 30;

// console.log(obj1.age);
// console.log(obj2.age);



//Functions

// var age = 28;
// var obj = {
// 	name:'Tim',
// 	city:'New York'
// };

// change(a, b) {
// 	a = 30;
// 	b.city = 'San Francisco'
// };

// change(age, obj);

// console.log(age);
// console.log(obj.city);



//Lecture 4: Passing Functions as Arguments

// var years = [1985, 1975, 2003, 1937, 1996];

// //Generic function that loops over an input array!! Gave it a function as an input.

// function arrayCalc(arr, fn) {
// 	var arrayResult = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		arrayResult.push(fn(arr[i]));
// 	}

// 	return arrayResult;
// }
//////////////////////////////////////////////////

//Lecture 5: Callback functions///

// function calculateAge(el) {
// 	return 2018 - el;
// };

// function isFullAge(el) {
// 	return el >= 18;
// }

// function maxHeartRate(el) {
// 	if (el >= 18 && el <= 81) {
// 	return Math.round(206.9 - (0.67 * el));
// 	} else {
// 		return -1;
// 	}
// }
///////////////////////////////////////////

// var ages = arrayCalc(years, calculateAge);
// console.log(ages);

// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);

// var rates = arrayCalc(ages, maxHeartRate);
// console.log(rates);



// Lecture 6: Functions returning functions ////

// function interviewQuestion(job) {
// 	if (job === 'designer') {
// 		return function(name) {
// 			 console.log(name + ', can you please explain UX design?');
// 		}
// 	} else if (job === 'teacher') {
// 		return function(name) {
// 			 console.log(name + ',  what do you teach?');
// 		}
// 	} else {
// 		return function(name) {
// 			console.log('Hello ' + name + ', What do you do?');
// 		}
// 	}
// }

// var teacherQuestion = interviewQuestion('teacher');

// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('Molly');

//another way to call//
// interviewQuestion('teacher')('Mark');



//Lecture 7: Immediately invoked function expressions//


// function game() {
// 	var score = Math.random() * 10;
// 	console.log(score >= 5);
// }

// game();

//IIFE Way// You don't have to call it!

// (function() {
// 	var score = Math.random() * 10;
// 	console.log(score >= 5);	
// })();


////Lecture 8: Closures//////

//An inner function always has access to the variables and parameters of its outer function, even after
//the outer function has returned//

// function retirement(retirementAge) {
// 	var a = ' years left until retirement.';
// 	return function(yearOfBirth){
// 		var age = 2018 - yearOfBirth;
// 		console.log((retirementAge - age ) + a);
// 	};
// }

// var retirementUSA = retirement(66);
// retirementUSA(1985);

//will get same result as above//
// retirement(66)(1985)



// function interviewQuestion(job) {
// 	if (job === 'designer') {
// 		return function(name) {
// 			 console.log(name + ', can you please explain UX design?');
// 		}
// 	} else if (job === 'teacher') {
// 		return function(name) {
// 			 console.log(name + ',  what do you teach?');
// 		}
// 	} else {
// 		return function(name) {
// 			console.log('Hello ' + name + ', What do you do?');
// 		}
// 	}
// }


// function interviewQuestion(job) {
// 	return function(name) {
// 		if (job === 'designer') {
// 			console.log(name + ', can you please explain UX design?');
// 		} else if (job === 'teacher') {
// 			console.log(name + ',  what do you teach?');
// 		} else {
// 			console.log('Hello ' + name + ', What do you do?');
// 		};
// 	};
// }

// interviewQuestion('designer')('Molly');
// interviewQuestion('teacher')('Nicole');
// interviewQuestion()('Tim');


//Lecture 9: Bind, call and apply//


// var john = {
// 	name: 'John',
// 	age: 32,
// 	job: 'teacher',
// 	presentation: function(style, timeOfDay) {
// 		if (style === 'formal') {
// 			console.log('Good ' + timeOfDay + ', ladies and gentlemen, my name is ' + this.name + '. I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
// 		} else if (style === 'casual') {
// 			console.log('Whats up guys? My name is ' + this.name + '. I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a great ' + timeOfDay + '.');
// 		};
// 	}
// };

// var emily = {
// 	name: 'Emily',
// 	age: 35,
// 	job: 'director'
// };

// john.presentation('formal', 'morning');
// john.presentation('casual', 'afternoon');

// john.presentation.call(emily, 'formal', 'afternoon');

// var johnCasual = john.presentation.bind(john, 'casual');
// var emilyFormal = john.presentation.bind(emily, 'formal');

// johnCasual('morning');
// emilyFormal('evening');

/////////////////////////////////////////////////////

//Using bind with functions calling functions//

// var years = [1985, 1975, 2003, 1937, 1999];

// //Generic function that loops over an input array!! Gave it a function as an input.

// function arrayCalc(arr, fn) {
// 	var arrayResult = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		arrayResult.push(fn(arr[i]));
// 	}

// 	return arrayResult;
// }
////////////////////////////////////////////////

//Lecture 5: Callback functions///

// function calculateAge(el) {
// 	return 2018 - el;
// };

// function isFullAge(limit, el) {
// 	return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

// console.log(ages);
// console.log(fullJapan);






























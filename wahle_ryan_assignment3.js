// Ryan Wahle
// SDI 1301
// January 23, 2013
// Project 3
// Sneaking into Work Late

// Setup some variables

var theLateGuysName = "James";
var numberOfMinutesLate = 19;
var coworkerNames = ["Jeff", "Sarah", "Jimbob", "Mark"];

// Procedure
var securityDesk = function(name) {
	if (name == "James") {
		console.log("Security: Hey James! Good morning! I hope you had a good weekend!");
	} else {
		console.log("Security: Good Morning! Have a great day today!");
	}
}

// Boolean Function
var isCoworkerCool = function(coworker1, coworker2) {
	if ( (coworker1 == "James" && coworker2 == "Jeff") || (coworker1 == "Jeff" && coworker2 == "James") ) {
		return true;
	} else {
		return false;
	}
}

// Number Function
var goodMorningYells = function(numberOfCoworkers) {
	var numberOfGoodmornings = 0;

	while (numberOfGoodmornings < numberOfCoworkers) {
		numberOfGoodmornings = numberOfGoodmornings + 1;
		console.log("Good Morning!");
	}

	return numberOfGoodmornings;
}

// String Function
var loudSpeaker = function(name1, name2) {
	var newString = "";

	newString = "Attention! Attention! " + name1 + "!! Please come to my office now! This is " + name2 + "!!";

	return newString;
}

// Array Function
var ratCoworkers = function(arrayCoworkers, numberLateness) {
	var numberOfCoworkers = arrayCoworkers.length;
	var madCoworkers = [];
	
	for (var currentWorker = 0; currentWorker < numberOfCoworkers; currentWorker++) {

		if (numberLateness % currentWorker) {
			madCoworkers.push(arrayCoworkers[currentWorker]);
		}
	}

	return madCoworkers;
}  

// Walks into building
console.log(theLateGuysName + " walks into the building and shows his badge to the guard.");
securityDesk(theLateGuysName);

// See's first coworker
console.log(theLateGuysName + " walks past security and runs into " + coworkerNames[0] + ".");

var myReturn = isCoworkerCool(theLateGuysName, coworkerNames[0]);
if (myReturn == true) {
	console.log(coworkerNames[0] + " gives you the nod and ignores the fact you are late, since you two are friends.");
} else {
	console.log("Too bad " + coworkerNames[0] + " hates you and you watch as they walk to the bosses office and rat you out!");
}

// Good morning!
var numberOfGoodMornings = goodMorningYells(coworkerNames.length);
console.log("Oh great! Just what you need! " + numberOfGoodMornings + " people telling you Good Morning as your late!!");

// Sits at his desk
console.log("As you sit down to read your email you hear something scary on the loud speaker!");
console.log("Loudspeaker: " + loudSpeaker(theLateGuysName, "your Boss"));

// Go and see the boss man!
var coworkersWhoHateYou = ratCoworkers(coworkerNames, numberOfMinutesLate);
console.log("Boss Man: Listen here " + theLateGuysName + "!! Your always late and today I got " + coworkersWhoHateYou.length + " more complaints about you!");
console.log("Boss Man: YOUR FIRED!!");

console.log("-- The End --");

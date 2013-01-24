// Ryan Wahle
// SDI 1301
// January 23, 2013
// Project 3
// Showing up to work late

// Global Variables
var name = "Ryan";
var numberMinutesLate = 30;
var coworkerInformation = [];

// This procedure takes the json data and sets up the coworker Object
var setupCoworkersObject = function (json) {
	var tempCoworkerInfo = [];

	// Method: Procedure
	var printDaysWorked = function () {
		var days = this.workdays;
		var string = "";
		var i = 0;

		while (i < days.length) {
			string = string + days[i] + " ";
			i++;
		}

		console.log(string);
	};

	// Method: Function
	var doesWorkThisDay = function (stringDay) {
		for (var i = 0; i < this.workdays.length; i++) {
			// First verify this is a work day
			if (stringDay == "Monday" || stringDay == "Tuesday" ||
				stringDay == "Wednesday" || stringDay == "Thursday" ||	
				stringDay == "Friday")
			{
				// Yes it is a work day!
				if (stringDay == this.workdays[i]) {
					return true;
				}
			}
		}

		return false;
	};

	// Method: Function
	var numberOfDaysWorked = function () {
		var numOfDays = 0;
	
		for (var i = 0; i < this.workdays.length; i++) {
			numOfDays++;
		}

		return numOfDays;
	}

	// Method: Accessor
	var getName = function () {
		return this.name;
	}

	// Method: Mutator
	var setRank = function (numNewRank) {
		if (numNewRank >= 1 && numNewRank <= 5) {
			this.ranking = numNewRank;
		}	
	}
	
	var setIsHappy = function (yesno) {
		if (yesno == true || yesno == false) {
			this.isHappy = yesno;
		}
	}

	// Setup Object
	for (var i = 0; i < json.workers.length; i++) {
		var worker = json.workers[i];

		var tempObject = {
			"name"    : worker.name,
			"ranking" : worker.ranking,
			"workdays": worker.workdays,
			"isHappy" : worker.isHappy,

			"printDaysWorked"	: printDaysWorked,
			"doesWorkThisDay"	: doesWorkThisDay,
			"numberOfDaysWorked"	: numberOfDaysWorked,

			"getName"	: getName,
			"setRank"	: setRank,
			"setIsHappy"	: setIsHappy 
		};

		tempCoworkerInfo.push(tempObject);	

	}	

	return tempCoworkerInfo;
};

// Get names of all workers
var getAllNames = function (coworkerArray) {
	var tempNamesArray = [];

	for (var i = 0; i < coworkerArray.length; i++) {
		tempNamesArray.push(coworkerArray[i].getName());		
	}

	return tempNamesArray;
}

// Set the current coworker
var setCurrentCoworker = function (coworkerObject) {
	coworker = coworkerObject;
}

// Call function to setup coworker objects
coworkerInformation = setupCoworkersObject(json);

// And the story begins!
var coworker;

console.log("After " + name + " got fired for being " + numberMinutesLate + " minutes late, all employees details have been looked over completely."); 
console.log("The boss will only call in a few of the co-workers (" + getAllNames(coworkerInformation) + ") that he feels need to be counseled.");

setCurrentCoworker(coworkerInformation[1]);
console.log(coworker.getName() + " gets called up first.");
console.log("The boss asks what days do you work and they respond with: ");
coworker.printDaysWorked();
console.log("So you only work " + coworker.numberOfDaysWorked() + " days correct? I don't think that is enough, and I am demoting you now!");

var previousRank = coworker.ranking;
coworker.setRank(3);
console.log("Your previous rank was " + previousRank + " and you are now only at rank " + coworker.ranking + "!! :("); 

coworker.setIsHappy(false);
console.log("Your are now no longer happy with your employement!");

setCurrentCoworker(coworkerInformation[0]);
console.log("");
console.log("The boss now calls in " + coworker.name + " and asks if he works Monday's.");

if (coworker.doesWorkThisDay("Monday") == true) {
	console.log("Well, yes I do sir! Would you like me to start working Saturday's too?");
} else {
	console.log("No I don't, would you like to me to start?");
}

console.log("The boss says, no that will not be needed. You are already a great employee! Thank you for your hard work!");
console.log("-- THE END --");

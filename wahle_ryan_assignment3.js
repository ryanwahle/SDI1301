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

// Call function to setup coworker objects
coworkerInformation = setupCoworkersObject(json);

// Does coworker work this day? 
console.log(coworkerInformation[1].doesWorkThisDay("Thursday"));

// Get the name
console.log("Name: " + coworkerInformation[1].getName());

// Set new rank
console.log("Old Rank: " + coworkerInformation[1].ranking);
coworkerInformation[1].setRank(20);
console.log("New Rank: " + coworkerInformation[1].ranking);

// Set isHappy
coworkerInformation[1].setIsHappy(true);

// Number of days worked
console.log("Number days worked this week: " + coworkerInformation[1].numberOfDaysWorked());

// Print out all the names in the array
console.log("Names: " + getAllNames(coworkerInformation));

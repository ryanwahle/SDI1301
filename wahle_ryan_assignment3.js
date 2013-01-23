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



	for (var i = 0; i < json.workers.length; i++) {
		var worker = json.workers[i];

		var tempObject = {
			"name"    : worker.name,
			"ranking" : worker.ranking,
			"workdays": worker.workdays,
			"isHappy" : worker.isHappy,

			"printDaysWorked": printDaysWorked

		};

		tempCoworkerInfo.push(tempObject);	

	}	

	return tempCoworkerInfo;
};

// Call function to setup coworker objects
coworkerInformation = setupCoworkersObject(json);

coworkerInformation[1].printDaysWorked();



// Ryan Wahle
// SDI 1301
// January 16, 2013
// Project 2
// Sneaking into Work Late

// Setup some variables

var theLateGuysName = "James";
var numberOfMinutesLate = 20;
var coworkerNames = ["Jeff", "Sarah", "Jimbob", "Mark"];

// Procedure
var securityDesk = function(name) {
	if (name == "James") {
		console.log("Hey James! Good morning! Did you have a good weekend?");
	} else {
		console.log("Good Morning! Have a great day today!");
	}
}

securityDesk(theLateGuysName);

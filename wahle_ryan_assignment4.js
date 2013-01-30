// Ryan Wahle
// SDI 1301
// Project 4
// XX January, 2013

var mylib = wahleryanLibrary();

//
// isPhoneNumberFormatCorrect
//

if (mylib.isPhoneNumberFormatCorrect("916-752-4955")) { 
	console.log("isPhoneNumberFormatCorrect: TRUE");
} else {
	console.log("isPhoneNumberFormatCorrect: FALSE");
}

//
// isURL
//

if (mylib.isURL("http://blah")) {
	console.log("isURL: TRUE");
} else {
	console.log("isURL: FALSE");
}

//
// hoursBetweenDates
//

var startDate = new Date("2012-12-01");
var endDate = new Date("2012-12-02");

startDate.setHours(1);
startDate.setMinutes(30);
endDate.setHours(2);

console.log(mylib.hoursBetweenDates(startDate, endDate));


//
// fuzzyMatchNumber
//

console.log(mylib.fuzzyMatchNumber(124, 100, 25));

//
// stringToNumber
//

var object = mylib.stringToNumber("25");

if (object === 25) {
	console.log("A Number Object. Good");
} else {
	console.log("Something else. Bad");
}


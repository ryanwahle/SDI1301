// Ryan Wahle
// SDI 1301
// Project 4
// XX January, 2013

var wahleryanLibrary = function () 
{

	// Does a string follow a 123-456-7890 pattern like a phone number?
	var isPhoneNumberFormatCorrect = function (number)
	{
		// Make sure the string is only 12 chars in length
		if (number.length == 12) {

			// Do a quick check to see if the dashes are in the correct spot
			if (number.charAt(3) == "-" && number.charAt(7) == "-") {

				// Now we will make sure the rest of the string is numbers
				var areacode = number.substring(0,3);
				var prefix = number.substring(4,7);
				var postfix = number.substring(8,12);	

				if (!isNaN(areacode) && !isNaN(prefix) && !isNaN(postfix)) {
					// It's a number and everthing is correct
					return true;
				}
			}
		}

		// If nothing returns true, then return false
		return false;
	}

	// Is the string a URL? (Does it start with http: or https:?)
	var isURL = function (url)
	{
		// Lets first check if it's https or not
		var secureChar = url.charAt(4);
		if (secureChar.toLowerCase() == "s") {
			// OK so, there was an 's' but is it really 'https:'
			var urlProtocol = url.substring(0, 6);
			if (urlProtocol.toLowerCase() == "https:") {
				return true;
			}
		} else {
			// Is it really 'http:'
			var urlProtocol = url.substring(0, 5);
			if (urlProtocol.toLowerCase() == "http:") {
				return true;
			}
		}

		// If nothing returns true, then return false
		return false;
	}

	// Find the number of hours or days difference between two dates
	var hoursBetweenDates = function (startDate, endDate)
	{
		// .getTime returns time in milliseconds
		// 3600000 milliseconds = 1 hour
		var hours = (endDate.getTime() - startDate.getTime()) / 3600000;	
		return hours;
	}

	// Fuzzy-match a number: is the number above or below a number within a certain percent?
	var fuzzyMatchNumber = function(numberToCheck, number, leewayPercentage)
	{
		// Get the amount of leeway
		var leewayNumber = number * (leewayPercentage * 0.01);
		
		// Set min and max numbers and check if in between
		var minNumber = number - leewayNumber;
		var maxNumber = number + leewayNumber;

		if ( (numberToCheck >= minNumber) && (numberToCheck <= maxNumber) ) {
			return true;
		} else {
			return false;
		} 
	}

	// Given a string version of a number such as "42", return the value as an actual Number, such as 42.
	var stringToNumber = function(string)
	{
		// Convert to Number object 
		return Number(string);
	}

	var numberToDollarFormat = function (number) 
	{
		// Return a number that always has two decimal point numbers
		return Number(number).toFixed(2);
	}

	var upperCaseSeperateWords = function (string) 
	{
		var newString = "";

		// Split the string
		var arrayOfWords = string.split(" ");

		for (var i = 0; i < arrayOfWords.length; i++) {
			// Just upper case the first letter
			var firstLetter = arrayOfWords[i].substring(0,1);
			firstLetter = firstLetter.toUpperCase();

			// Get the rest of the string
			var restOfString;
			if (arrayOfWords[i].length > 1) {
				restOfString = arrayOfWords[i].substring(1, arrayOfWords[i].length);
			} else {
				restOfString = "";
			}
		
			newString = newString + " " + firstLetter + restOfString;
		}

		// Shave off the first " " and return the string
		return newString.substring(1, newString.length);
	}


	return {
		"isPhoneNumberFormatCorrect": 	isPhoneNumberFormatCorrect,
		"isURL": 			isURL,
		"upperCaseSeperateWords": 	upperCaseSeperateWords,

		"hoursBetweenDates": 	hoursBetweenDates,
		"fuzzyMatchNumber": 	fuzzyMatchNumber,
		"stringToNumber": 	stringToNumber,
		"numberToDollarFormat": numberToDollarFormat
	}
}

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
		var hours = (endDate.getTime() - startDate.getTime()) / 3600000;	
		return hours;
	}

	return {
		"isPhoneNumberFormatCorrect": isPhoneNumberFormatCorrect,
		"isURL": isURL,

		"hoursBetweenDates": hoursBetweenDates
	}
}

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

		// If nothing returns true, then return false;
		return false;
	}

	return {
		isPhoneNumberFormatCorrect: isPhoneNumberFormatCorrect
	}
}

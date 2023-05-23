export const removeWhiteSpaces = (string) => {
	return string.replace(/\s/g, "");
};

const validateCardNumber = (number) => {
	//Check if the number contains only numeric value
	//and is of between 13 to 19 digits
	const regex = new RegExp("^[0-9]{13,19}$");
	if (!regex.test(number)) {
		return false;
	}

	return luhnCheck(number);
};

const luhnCheck = (val) => {
	let checksum = 0; // running checksum total
	let j = 1; // takes value of 1 or 2

	// Process each digit one by one starting from the last
	for (let i = val.length - 1; i >= 0; i--) {
		let calc = 0;
		// Extract the next digit and multiply by 1 or 2 on alternative digits.
		calc = Number(val.charAt(i)) * j;

		// If the result is in two digits add 1 to the checksum total
		if (calc > 9) {
			checksum = checksum + 1;
			calc = calc - 10;
		}

		// Add the units element to the checksum total
		checksum = checksum + calc;

		// Switch the value of j
		if (j == 1) {
			j = 2;
		} else {
			j = 1;
		}
	}

	//Check if it is divisible by 10 or not.
	return checksum % 10 == 0;
};

const validateExpiryDate = (date) => {
	let d = new Date();
	let currentYear = d.getFullYear();
	let currentMonth = d.getMonth() + 1;
	// get parts of the expiration date
	let parts = date.split("/");
	let year = parseInt(parts[1], 10) + 2000;
	let month = parseInt(parts[0], 10);
	if (month > 12 || month < 1) {
		return false;
	}
	// compare the dates
	if (year < currentYear || (year == currentYear && month < currentMonth)) {
		return false;
	}
	return true;
};

export const validateFields = (data) => {
	let valid = [];
	const cardNumber = validateCardNumber(removeWhiteSpaces(data.number));
	const expiryDate = validateExpiryDate(data.expiry);
	if (data.name.length === 0) {
		valid.push("name");
	}
	if (!cardNumber) {
		valid.push("number");
	}
	if (!expiryDate) {
		valid.push("expiry");
	}

	if (data.cvv.lenth < 3) {
		valid.push("cvv");
	}
	if (valid.length === 0) {
		valid = [];
	}
	return valid;
};

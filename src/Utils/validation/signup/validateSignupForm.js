const validateEmail = (email) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
};

export const validateForm = (data) => {
	let valid = [];
	if (data.name.length === 0 || data.name.length <= 1) {
		valid.push("Name must be longer than 1 letter.");
	}
	if (data.password.length < 6) {
		valid.push("Password must be at least 6 letters.");
	}
	if (!validateEmail(data.email)) {
		valid.push("please fill valid email address");
	}
	if (valid.length === 0) {
		valid = "valid";
	}
	return valid;
};

const validateString = (str) => {
	return str.replace(/\s/g, "").length;
};

export const validateLoginForm = (email, password) => {
	if (validateString(email) && validateString(password)) {
		return true;
	}

	return false;
};

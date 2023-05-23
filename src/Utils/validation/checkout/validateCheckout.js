export const validateCheckout = (name, termsOfService, offset, amount) => {
	if (name.trim().length === 0) return "Must fill out company name";
	if (!termsOfService) return "Must agree to terms of service";
	if (typeof offset === "string") return "Must pick a valid project";
	if (amount === 0) return "Amount must be above 0";
	return "valid";
};

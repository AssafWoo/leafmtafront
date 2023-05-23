export const billingFields = [
	{
		name: "name",
		labelForHtml: "frmNameCC",
		label: "Name on card",
		boxSize: "1 0 100%",
		inputType: "text",
		placeHolder: "Jane Doe",

		type: "input",
	},
	{
		name: "number",
		labelForHtml: "frmCCNum",
		label: "Card number",
		boxSize: "2 0 40%",
		type: "input",
		inputType: "number",
		placeHolder: "",
		mask: "9999 9999 9999 9999",
	},
	{
		name: "expiry",
		labelForHtml: "frmCCExp",
		label: "Expiry",
		boxSize: "2 0 20%",
		type: "input",
		inputType: "number",
		placeHolder: "mm/yy",
		mask: "99/99",
	},
	{
		name: "cvc",
		labelForHtml: "frmCCCVC",
		label: "Code",
		boxSize: "2 0 15%",
		type: "input",
		inputType: "number",
		placeHolder: "xxx",
		mask: "999",
	},
	{
		name: "authorize",
		label:
			"I authorize Leaf to take payments from the account associated with this card in accordance with the terms of my agreement",
		boxSize: "2 0 100%",
		type: "checkbox",
	},
];

const Days = {
	0: "Sun",
	1: "Mon",
	2: "Tue",
	3: "Wed",
	4: "Thu",
	5: "Fri",
	6: "Sat",
};
export const addDayName = (userObj) => {
	const newList = userObj.map((item) => {
		const currentDay = Days[item["day"]];
		return Object.assign(item, { name: currentDay });
	});
	return newList;
};

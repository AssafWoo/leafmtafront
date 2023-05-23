export const organizaDays = (array) => {
	let day = new Date();
	let currentDay = day.getDay();
	let newArrayOrder = [];
	for (let i = 0; i < array.length; i++) {
		if (newArrayOrder.length === 7) break;
		for (let j = 0; j < array.length; j++) {
			if (array[j].day === currentDay) {
				if (newArrayOrder.length === 7) break;
				newArrayOrder.push(array[j]);
				if (currentDay === 0) {
					currentDay = 6;
				} else {
					currentDay = currentDay - 1;
				}
			}
		}
	}
	// newArrayOrder.unshift(newArrayOrder.pop());
	newArrayOrder.reverse();
	return newArrayOrder;
};

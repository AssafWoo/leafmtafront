/* eslint-disable array-callback-return */

export const makeChartArray = (arrObj) => {
	let emissionArray = [];
	let transactionsArray = [];
	arrObj.map((item) => {
		transactionsArray.push(
			Object.assign(
				{},
				{
					name: item.name,
					transaction: item["transactions"],
				}
			)
		);
		return emissionArray.push(
			Object.assign({}, { name: item.name, co2: item["co2"] })
		);
	});
	return { transactionArr: transactionsArray, emissionsArr: emissionArray };
};

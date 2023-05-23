export const isObjEmpty = (obj) => {
	if (obj === null) return false;
	if (obj === undefined) return false;
	return Object.keys(obj).length === 0;
};

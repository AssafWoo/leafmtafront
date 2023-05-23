export const extractID = () => {
	const urlPath = window.location.pathname.split("/");
	const id = urlPath.at(-1);
	return id;
};

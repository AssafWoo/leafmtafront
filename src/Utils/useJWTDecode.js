import jwt_decode from "jwt-decode";

const getJWT = (jwt) => {
	const decoded = jwt_decode(jwt);
	return decoded;
};

export default getJWT;

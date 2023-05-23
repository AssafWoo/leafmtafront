import { useQuery } from "react-query";
import { Spinner } from "@chakra-ui/spinner";
import { getToken } from "./getToken";
import axios from "../axiosConfig";

export const fetchData = async (URL, body, method) => {
	let validToken = getToken();
	let config = {
		headers: {
			Authorization: "Bearer " + validToken,
		},
	};
	try {
		const response =
			method === "POST"
				? await axios.post(URL, body, config)
				: await axios.get(URL, config);
		const data = await response.data.data;
		return data;
	} catch (e) {
		if (e.message === "Request failed with status code 401") {
			localStorage.clear();
			window.location = "/login";
		}
		throw e;
	}
};

const useFetch = (queryURL, queryName) => {
	const { isLoading, isError, error, data } = useQuery(
		queryName,
		() => fetchData(queryURL),
		{
			refetchAllOnWindowFocus: false,
			retry: 1,
			refetchInterval: 60000,
		}
	);
	if (isLoading) {
		return <Spinner />;
	}
	if (isError) {
		return "Error";
	}
	return { isLoading, isError, error, data };
};

export default useFetch;

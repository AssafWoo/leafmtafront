import { default as a } from "axios";

const apiUrl = process.env.REACT_APP_BASE_API_URL;
const currentProccess = process.env.NODE_ENV;

const axios = a.create({
	baseURL:
		currentProccess === "production" ? "https://api.ecoleaf.app" : apiUrl,
});

export default axios;

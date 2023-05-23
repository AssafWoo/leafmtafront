import { combineReducers } from "redux";
import transactions from "./transactions";
import requests from "./requests";
import user from "./user";
import insights from "./insights";
import projects from "./projects";

export default combineReducers({
	transactions,
	requests,
	projects,
	user,
	insights,
});

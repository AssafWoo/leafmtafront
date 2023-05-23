import { createContext, useReducer } from "react";
import user from "../reducers/user";
import transactions from "../reducers/transactions";
import projects from "../reducers/projects";
import { userInitialState } from "../initialState/user";
import { transactionsInitialState } from "../initialState/transactions";
import { projectsInitialState } from "../initialState/projects";

export const GlobalContext = createContext({});

export const GlobalProvider = (props) => {
	const [userState, userDispatch] = useReducer(user, userInitialState);
	const [transactionsState, transactionsDispatch] = useReducer(
		transactions,
		transactionsInitialState
	);
	const [projectsState, projectsDispatch] = useReducer(
		projects,
		projectsInitialState
	);
	return (
		<GlobalContext.Provider
			value={{
				userState,
				userDispatch,
				transactionsState,
				transactionsDispatch,
				projectsState,
				projectsDispatch,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

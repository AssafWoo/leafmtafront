import {
	LOAD_PROJECTS,
	LOAD_PROJECTS_SUCCESS,
	LOAD_PROJECTS_FAILURE,
	SET_PROJECTS,
} from "../actions/projects";

const reducer = (state, action) => {
	switch (action.type) {
		case LOAD_PROJECTS:
			return { error: action.payload };
		case LOAD_PROJECTS_SUCCESS:
			return { ...state, allProjects: action.payload, error: null };
		case LOAD_PROJECTS_FAILURE:
			return { ...state, error: action.payload };
		case SET_PROJECTS:
			return { ...state, allProjects: action.payload, error: null };
		default:
			return state;
	}
};

export default reducer;

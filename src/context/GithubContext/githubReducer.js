import {
	SET_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_REPOS,
} from '../types';

const GithubReducer = (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, loading: action.payload };
		case SET_USERS:
			return { ...state, users: action.payload };
		case CLEAR_USERS:
			return { ...state, users: [] };
		case GET_USER:
			return { ...state, user: action.payload };
		case GET_REPOS:
			return { ...state, repos: action.payload };
		default:
			return { ...state };
	}
};

export default GithubReducer;

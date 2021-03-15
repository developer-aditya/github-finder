import React, { useReducer } from 'react';
import axios from 'axios';
import GithubReducer from './githubReducer';
import GithubContext from './githubContext';
import {
	SET_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_REPOS,
} from '../types';

const GithubState = (props) => {
	const intialState = {
		users: [],
		loading: false,
		user: {},
		repos: [],
	};

	const [state, dispatch] = useReducer(GithubReducer, intialState);

	// Functions to change the state

	// GET USER DATA AND DISPATCH TO REDUCER
	const getUser = async (username) => {
		setLoading(true);
		try {
			const options = {
				url: `https://api.github.com/users/${username}?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`,
				method: 'GET',
				timeout: 4000,
			};
			const res = await axios(options);
			dispatch({ type: GET_USER, payload: res.data });
			setLoading(false);
		} catch (err) {
			setLoading(false);
		}
	};

	// GET USERS DATA AND DISPATCH TO REDUCER
	const setUsers = async (text) => {
		setLoading(true);
		try {
			const options = {
				url: `https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`,
				method: 'GET',
				timeout: 4000,
			};
			const res = await axios(options);
			dispatch({ type: SET_USERS, payload: res.data.items });
			setLoading(false);
		} catch (err) {
			setLoading(false);
		}
	};

	// GET REPOS DATA AND DISPATCH TO REDUCER
	const getRepos = async (username) => {
		setLoading(true);
		try {
			const options = {
				url: `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`,
				method: 'GET',
				timeout: 4000,
			};
			const res = await axios(options);
			dispatch({ type: GET_REPOS, payload: res.data });
			setLoading(false);
		} catch (err) {
			setLoading(false);
		}
	};

	// CLEAR USER
	const clearUsers = () => dispatch({ type: CLEAR_USERS });

	// SET LOADING
	const setLoading = (ans) => dispatch({ type: SET_LOADING, payload: ans });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				loading: state.loading,
				user: state.user,
				repos: state.repos,
				setUsers,
				clearUsers,
				getUser,
				getRepos,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;

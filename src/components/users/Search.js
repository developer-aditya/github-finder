import React, { useState, useContext } from 'react';
import GithubContext from '../../context/GithubContext/githubContext';
import AlertContext from '../../context/AlertContext/alertContext';

const Search = (props) => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);

	const { setUsers, clearUsers, users } = githubContext;
	const { setAlert } = alertContext;

	const [text, setText] = useState('');

	const formSubmit = (e) => {
		if (text === '') {
			setAlert('Please Enter User Name...', 'light');
		} else {
			setUsers(text);
			setText('');
		}
		e.preventDefault();
	};

	const formChange = function (e) {
		setText(e.target.value);
	};

	const clearUsersInSearch = function (e) {
		clearUsers();
	};

	return (
		<div className='my-1'>
			<form onSubmit={formSubmit} className='form'>
				<input
					type='text'
					name='text'
					placeholder='Search Users...'
					value={text}
					onChange={formChange}
				/>
				<input
					type='submit'
					value='Submit'
					className='btn btn-dark btn-block'
				/>
				{users.length > 0 && (
					<button
						onClick={clearUsersInSearch}
						className='btn btn-light btn-block'
					>
						Clear All
					</button>
				)}
			</form>
		</div>
	);
};

export default Search;

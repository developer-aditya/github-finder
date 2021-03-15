import React, { useContext } from 'react';
import Spinner from '../layouts/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/GithubContext/githubContext';

const Users = (props) => {
	const githubContext = useContext(GithubContext);
	const { users, loading } = githubContext;
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className='grid-3'>
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
};
export default Users;

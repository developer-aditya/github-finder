import React from 'react';
import Spinner from '../layouts/Spinner';
import UserItem from './UserItem';
import PropTypes from 'prop-types';

const User = ({ users, loading }) => {
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

User.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};
export default User;

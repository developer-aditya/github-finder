import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
	const { login, avatar_url } = user;
	return (
		<div className='card text-center'>
			<img
				src={avatar_url}
				alt='user-img'
				className='round-img'
				style={{ width: '100px' }}
			/>
			<h3>{login}</h3>
			<div>
				<Link
					to={`/user/${login}`}
					className='btn btn-dark btn-sm my-1'
				>
					Visit Account
				</Link>
			</div>
		</div>
	);
};

UserItem.propType = {
	user: PropTypes.object.isRequired,
};

export default UserItem;

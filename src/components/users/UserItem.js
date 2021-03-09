import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user }) => {
	const { login, avatar_url, html_url } = user;
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
				<a
					href={html_url}
					target='_blank'
					rel='noopener noreferrer'
					className='btn btn-dark btn-sm my-1'
				>
					Visit Account
				</a>
			</div>
		</div>
	);
};

UserItem.propType = {
	user: PropTypes.object.isRequired,
};

export default UserItem;

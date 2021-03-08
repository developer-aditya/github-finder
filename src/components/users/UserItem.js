import React, { Component } from 'react';

class UserItem extends Component {
	render() {
		const { id, login, avatar_url, html_url } = this.props.user;
		return (
			<div className='card text-center' id={id}>
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
	}
}
// UserItem.prototype.propTypes = {};
export default UserItem;

import React, { Component } from 'react';
import UserItem from './UserItem';

class User extends Component {
	state = {
		users: [
			{
				login: 'mojombo',
				id: 1,
				avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
				html_url: 'https://github.com/mojombo',
			},
			{
				login: 'defunkt',
				id: 2,
				avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
				html_url: 'https://github.com/defunkt',
			},
			{
				login: 'pjhyett',
				id: 3,
				avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
				html_url: 'https://github.com/pjhyett',
			},
			{
				login: 'wycats',
				id: 4,
				avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4',
				html_url: 'https://github.com/wycats',
			},
			{
				login: 'ezmobius',
				id: 5,
				avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
				html_url: 'https://github.com/ezmobius',
			},
		],
	};
	render() {
		const { users } = this.state;
		return (
			<div className='grid-3'>
				{users.map((user) => (
					<UserItem user={user} />
				))}
			</div>
		);
	}
}

export default User;

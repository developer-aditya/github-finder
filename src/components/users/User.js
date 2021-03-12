import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
	}
	render() {
		const {
			avatar_url,
			name,
			location,
			hireable,
			bio,
			html_url,
			login,
			blog,
			company,
		} = this.props.user;
		console.log(this.props.user);

		return (
			<Fragment>
				<Link to='/' className='btn btn-light mx-1'>
					Back To Search
				</Link>
				Hireable:{' '}
				{hireable ? (
					<i className='fas fa-check-circle text-success'></i>
				) : (
					<i className='fas fa-times-circle text-danger'></i>
				)}
				<div className='card grid-2'>
					<div className='all-center'>
						<img
							src={avatar_url}
							alt='user-img'
							className='round-img my-1'
							style={{ width: '100px', display: 'block' }}
						/>
						<h1>{name}</h1>
						<small>Location: {location}</small>
					</div>
					<div>
						<h1>Bio</h1>
						<p>{bio}</p>
						<a
							href={html_url}
							target='_blank'
							rel='noreferrer noopener'
							className='btn btn-dark my-1'
						>
							Link To Profile
						</a>
						<p>Username: {login}</p>
						<p>Company: {company}</p>
						<small>
							Website:
							<a
								href={blog}
								target='_blank'
								rel='noopener noreferrer'
							>
								{blog}
							</a>
						</small>
					</div>
				</div>
				<div className='card my-1'></div>
			</Fragment>
		);
	}
}

export default User;

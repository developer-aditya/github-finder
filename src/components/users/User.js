import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import Spinner from '../layouts/Spinner';

export class User extends Component {
	static propType = {
		getUser: PropTypes.func.isRequired,
		getRepos: PropTypes.func.isRequired,
		user: PropTypes.object.isRequired,
		repos: PropTypes.array.isRequired,
		loading: PropTypes.bool.isRequired,
	};
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
		this.props.getRepos(this.props.match.params.login);
	}
	render() {
		const { user, repos, loading } = this.props;
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
			followers,
			following,
			public_repos,
			public_gist,
		} = user;

		if (loading) return <Spinner />;

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
				<div className='card text-center my-1'>
					<div className='badge badge-primary'>
						Followers: {followers}
					</div>
					<div className='badge badge-success'>
						Following: {following}
					</div>
					<div className='badge badge-light'>
						Public Repos: {public_repos}
					</div>
					<div className='badge badge-dark'>
						Public Gist: {public_gist}
					</div>
				</div>
				<Repos repos={repos} />
			</Fragment>
		);
	}
}

export default User;

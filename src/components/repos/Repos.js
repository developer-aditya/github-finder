import React, { Fragment, useContext } from 'react';
import ReposItem from './ReposItem';
import GithubContext from '../../context/GithubContext/githubContext';

const Repos = (props) => {
	const { repos } = useContext(GithubContext);
	return (
		<Fragment>
			{repos.map((repo) => (
				<ReposItem repo={repo} key={repo.id} />
			))}
		</Fragment>
	);
};

export default Repos;

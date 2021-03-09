import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
	const { icon, title } = props;
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className={icon + ' mx-1'} />
				{title}
			</h1>
		</nav>
	);
};

Navbar.defaultProps = {
	icon: 'fab fa-github',
	title: 'Github finder',
};

Navbar.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Navbar;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
	static defaultProps = {
		icon: 'fab fa-github',
		title: 'Github finder',
	};

	static propTypes = {
		icon: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	};

	render() {
		const { icon, title } = this.props;
		return (
			<nav className='navbar bg-primary'>
				<h1>
					<i className={icon + ' mx-1'} />
					{title}
				</h1>
			</nav>
		);
	}
}

export default Navbar;

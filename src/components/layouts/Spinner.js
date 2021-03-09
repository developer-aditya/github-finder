import React, { Fragment } from 'react';
import SpinnerImg from './spinner.gif';

const Spinner = () => {
	const imgStyle = {
		width: '200px',
		margin: 'auto',
		display: 'block',
		marginTop: '5rem',
	};
	return (
		<Fragment>
			<img src={SpinnerImg} alt='Loading...' style={imgStyle} />
		</Fragment>
	);
};

export default Spinner;

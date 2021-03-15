import React, { useContext } from 'react';
import AlertContext from '../../context/AlertContext/alertContext';

const Alert = (props) => {
	const { alert } = useContext(AlertContext);
	return (
		alert !== null && (
			<div className={`alert alert-${alert.type}`}>
				<i className='fas fa-info-circle mx-1' />
				{alert.message}
			</div>
		)
	);
};

export default Alert;

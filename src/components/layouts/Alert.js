import React, { useContext } from 'react';
import AlertContext from '../../context/AlertContext/alertContext';

const Alert = (props) => {
	const alertContext = useContext(AlertContext);
	const { alert } = alertContext;
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

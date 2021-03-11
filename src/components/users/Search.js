import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
	state = {
		text: '',
	};

	static propTypes = {
		searchUser: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClearButton: PropTypes.bool.isRequired,
		callAlert: PropTypes.func.isRequired,
	};

	formSubmit = (e) => {
		if (this.state.text === '') {
			this.props.callAlert('Please Enter User Name...', 'light');
		} else {
			this.props.searchUser(this.state.text);
			this.setState({ text: '' });
		}
		e.preventDefault();
	};

	formChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	clearUsers(e) {
		this.props.clearUsers();
	}

	render() {
		return (
			<div className='my-1'>
				<form onSubmit={this.formSubmit} className='form'>
					<input
						type='text'
						name='text'
						placeholder='Search Users...'
						value={this.state.text}
						onChange={this.formChange.bind(this)}
					/>
					<input
						type='submit'
						value='Submit'
						className='btn btn-dark btn-block'
					/>
					{this.props.showClearButton ? (
						<button
							onClick={this.clearUsers.bind(this)}
							className='btn btn-light btn-block'
						>
							Clear All
						</button>
					) : (
						''
					)}
				</form>
			</div>
		);
	}
}

export default Search;

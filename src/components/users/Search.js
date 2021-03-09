import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
	state = {
		text: '',
	};

	static propTypes = {
		searchUser: PropTypes.func.isRequired,
	};

	formSubmit = (e) => {
		this.props.searchUser(this.state.text);
		this.setState({ text: '' });
		e.preventDefault();
	};

	formChange(e) {
		return this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		return (
			<div>
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
				</form>
			</div>
		);
	}
}

export default Search;

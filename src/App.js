import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';
import Search from './components/users/Search';
import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false,
	};

	// async componentDidMount() {
	// 	this.setState({ loading: true });
	// 	const options = {
	// 		url: 'https://api.github.com/users',
	// 		method: 'GET',
	// 		timeout: 4000,
	// 	};
	// 	const res = await axios(options);
	// 	this.setState({ users: res.data, loading: false });
	// }

	async searchUserFromApp(text) {
		this.setState({ loading: true });
		try {
			const options = {
				url: `https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`,
				method: 'GET',
				timeout: 4000,
			};
			const res = await axios(options);
			this.setState({ users: res.data.items, loading: false });
		} catch (err) {
			this.setState({ loading: false });
			console.log(err);
		}
	}

	render() {
		const { users, loading } = this.state;
		return (
			<Fragment>
				<Navbar />
				<div className='container'>
					<Search searchUser={this.searchUserFromApp.bind(this)} />
					<User users={users} loading={loading} />
				</div>
			</Fragment>
		);
	}
}

export default App;

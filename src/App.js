import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/page/About';
import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null,
	};

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

	clearUsersFromApp() {
		this.setState({ users: [], laoding: false });
	}

	showAlertBox(msg, type) {
		this.setState({ alert: { type, msg } });
		setTimeout(() => {
			this.setState({ alert: null });
		}, 3000);
	}
	render() {
		const { users, loading, alert } = this.state;
		return (
			<Router>
				<div className='App'>
					<Navbar />
					<div className='container'>
						<Switch>
							<Route
								exact
								path='/'
								render={(props) => {
									return (
										<Fragment>
											<Alert alert={alert} />
											<Search
												searchUser={this.searchUserFromApp.bind(
													this,
												)}
												clearUsers={this.clearUsersFromApp.bind(
													this,
												)}
												callAlert={this.showAlertBox.bind(
													this,
												)}
												showClearButton={
													this.state.users.length > 0
														? true
														: false
												}
											/>
											<User users={users} loading={loading} />
										</Fragment>
									);
								}}
							/>
							<Route exact path='/about' component={About} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;

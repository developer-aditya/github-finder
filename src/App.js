import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/page/About';
import User from './components/users/User';
import GithubState from './context/GithubContext/GithubState';
import AlertState from './context/AlertContext/AlertState';
import './App.css';

const App = () => {
	return (
		<GithubState>
			<Router>
				<div className='App'>
					<Navbar />
					<div className='container'>
						<Switch>
							<Route
								exact
								path='/'
								render={(props) => {
									// props contains history match and other values related to route
									// params of route are in props.match.params
									return (
										<Fragment>
											<AlertState>
												<Alert />
												<Search />
											</AlertState>
											<Users />
										</Fragment>
									);
								}}
							/>
							<Route exact path='/about' component={About} />
							<Route exact path='/user/:login' component={User} />
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;

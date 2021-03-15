import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Alert from './components/layouts/Alert';
import Home from './components/page/Home';
import About from './components/page/About';
import NotFound from './components/page/NotFound';
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
						<AlertState>
							<Alert />
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/about' component={About} />
								<Route exact path='/user/:login' component={User} />
								<Route component={NotFound} />
							</Switch>
						</AlertState>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;

// Router.Provider provides history match etc as values inside it
// which is transfered as props to render/components and everything inside of it
// props contains history match and other values related to route
// params of route are in props.match.params

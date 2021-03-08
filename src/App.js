import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';
import './App.css';

class App extends Component {
	render() {
		return (
			<>
				<Navbar />
				<User />
			</>
		);
	}
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AppNavBar from './components/AppNavBar';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import EditUser from './components/EditUser';

function App() {
  return (
  	<div className="App d-flex flex-column" >
	  	<Router>
	  		<AppNavBar />
	  		<Switch>
	  			<Route exact path="/">
	  				<LogIn />
	  			</Route>
	  			<Route path='/newuser'>
	  				<EditUser />
	  			</Route>
	  		</Switch>
	  		<Footer />
	  	</Router>
  	</div>
  );
}

export default App;

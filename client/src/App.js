import React from 'react';

//Redux State Manager
import { Provider } from 'react-redux';
import store from './store';

//App Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//React Router Components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//App Comonents
import AppNavBar from './components/AppNavBar';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import NewUser from './components/NewUser';
import EditUser from './components/EditUser';
import ListUsers from './components/ListUsers';

function App() {
  return (
  	<Provider store={store}>
	  	<div className="App d-flex flex-column" >
		  	<Router>
		  		<AppNavBar />
		  		<Switch>
		  			<Route exact path="/">
		  				<LogIn />
		  			</Route>
		  			<Route path='/newuser'>
		  				<NewUser />
		  			</Route>
		  			<Route path='/userlist'>
		  				<ListUsers />
		  			</Route>
		  			<Route path='/edituser'>
		  				<EditUser />
		  			</Route>
		  		</Switch>
		  		<Footer />
		  	</Router>
	  	</div>
	</Provider>
  );
}

export default App;

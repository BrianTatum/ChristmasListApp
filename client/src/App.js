import React, { Component } from 'react';

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

class App extends Component {
	render() {
		return (
			<Provider store={store}>
			  	<div className="App d-flex flex-column" >
				  	<Router>
				  		<AppNavBar />
				  		<Switch>
				  			<Route exact path="/" component={LogIn} />
				  			<Route path='/newuser' component={NewUser}/>
				  			<Route path='/users' component={ListUsers}/>
				  			<Route path='/edituser/:id' component={EditUser}/>
				  		</Switch>
				  		<Footer />
				  	</Router>
			  	</div>
			</Provider>
		)
	}
}

export default App;

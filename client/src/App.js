import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container } from 'reactstrap';

import AppNavBar from './components/AppNavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App d-flex flex-column" >
    	<AppNavBar />
    	<Container className='main-area'>
    		<h1>Hello World</h1>
    	</Container>
    	<Footer />
    </div>
  );
}

export default App;

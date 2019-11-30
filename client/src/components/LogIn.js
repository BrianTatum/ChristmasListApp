import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { Container } from 'reactstrap';

import { FormField } from './common';

class LogIn extends Component {
	static propTypes = {
		errorMsg: PropTypes.string,
	};

	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			errors: {},
		}
	}

	render() {
		const { username, password, errors } = this.state;

		return (
			<Container className="main-area d-flex">
		    	<div className="align-self-center" style={{width: '100%'}}>
		    		<div className="row">
		    			<div className="col">
		    				<h1 className="text-center">Santa's Helper</h1>
		    			</div>
		    		</div>
		    		<div className="row">
		    			<div className="col-10 mx-auto">
		    				<div className="main-color-border">
			    				<div className="row">
			    					<div className="col">
			    						<h4 className="text-center font-weight-bold">
			    							Please Sign-in
			    						</h4>
			    						<form onSubmit={(e) => this._handleSubmit(e)}>
			    							<div className="row">
			    								<div className="col">
													<FormField	formLabel="Username"
																propKey="username"
																propValue={username || ''}
																onChange={this._updateField}
																placeholder='Enter Username'
																errors={errors.username} />
			    								</div>
			    							</div>
			    							<div className="row">
			    								<div className="col">
			    									<FormField	formLabel="Password"
																propKey="password"
																propValue={password || ''}
																onChange={this._updateField}
																placeholder='Enter Password'
																errors={errors.password}
																password />
			    								</div>
			    							</div>
			    							<div className="row">
			    								<div className="col">
			    									<button className="btn btn-success btn-block"
			    											type="submit">
			    										Login
			    									</button>
			    								</div>
			    								<div className="col">
			    									<button className="btn btn-warning btn-block"
			    											type="button"
			    											onClick={this._handleRest}>
			    										Reset
			    									</button>
			    								</div>
			    							</div>
			    						</form>
			    					</div>
			    					<div className="col">	
			    						<h4 className="text-center font-weight-bold">
			    							Create Account
			    						</h4>
			    						<p className="text-justify">
			    							Please create an account to list you Chirstmas list and view the list other family members.
			    						</p>
			    						<Link to='/newuser' className="btn btn-success btn-block">
											Create New User
										</Link>
			    					</div>
			    				</div>
			    			</div>
		    			</div>
		    		</div>
		    	</div>
		    </Container>
		);
	}

	_handleSubmit = (e) => {
		e.preventDefault();
		alert('Submit Login...');
	}
	_handleRest = () => {
		this.setState({
			username: '',
			password: '',
			errors: {}, 
		});
	}

	_updateField = (propKey, propValue) => {
		this.setState({
			[propKey]: propValue, 
		});
	}
}

const mapStateToProps = (state) => {
	return {

	};
}

export default connect(
	mapStateToProps,
	{}
)(LogIn)
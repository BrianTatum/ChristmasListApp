import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

//Redux Actions
import { creatUser } from '../actions/userActions';

import { Container } from 'reactstrap';

import UserForm from './EditUserComps/UserForm';

class NewUser extends Component {
	static propTypes = {
		name: PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		const { errors, userSaved } = this.props;

		if (userSaved) {
	      return <Redirect to='/users' />
	    }

		return (
			<Container className="main-area">
		    	<div className="row">
		    		<div className="col">
		    			<h1 className='text-center'>Create New User</h1>
		    		</div>
		    	</div>
		    	<UserForm user={{}}
		    			  errors={errors}
		    			  formSubmit={this._handleFormSubmit} />
		    </Container>
		);
	}

	_handleFormSubmit = (e, user) => {
		e.preventDefault();
		this.props.creatUser(user);
	}
}

const mapStateToProps = ({ users }) => {
	return {
		errors: users.errors,
		userSaved: users.userSaved,
	};
}

export default connect(
	mapStateToProps,
	{creatUser}
)(NewUser)


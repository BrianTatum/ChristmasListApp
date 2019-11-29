import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

//Redux Actions
import { showUser, updateUser } from '../actions/userActions';

import { Container } from 'reactstrap';

import UserForm from './EditUserComps/UserForm';

class EditUser extends Component {
	static propTypes = {
		user: PropTypes.object,
	};

	constructor(props) {
		super(props);

		this.state = {}
	}

	componentDidMount() {
		const {userId, showUser, userSaved} = this.props;
		showUser(userId);
	}

	render() {
		const { user, errors, userSaved } = this.props;

		const loading = <h1>Loading User...</h1>
		const userForm = <UserForm 	user={user}
		    			  			errors={errors}
		    			  			formSubmit={this._handleFormSubmit} />

		if (userSaved) {
	      return <Redirect to='/users' />
	    }

		return (
			<Container className="main-area">
		    	<div className="row">
		    		<div className="col">
		    			<h1 className='text-center'>Edit User Info
		    			</h1>
		    		</div>
		    	</div>
		    	{ user._id ? userForm : loading}
		    </Container>
		);
	}

	_handleFormSubmit = (e, user) => {
		e.preventDefault();
		console.log('Calling updateUser action...')
		this.props.updateUser(user);
	}
}

const mapStateToProps = ({ users }, { match }) => {
	return {
		user: users.curUser,
		errors: users.errors,
		userSaved: users.userSaved,
		userId: match.params.id,
	};
}

export default withRouter(connect(
	mapStateToProps,
	{updateUser, showUser}
)(EditUser));

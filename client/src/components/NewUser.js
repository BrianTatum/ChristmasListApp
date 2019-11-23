import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from 'reactstrap';

import UserForm from './EditUserComps/UserForm';

class NewUser extends React.Component {
	static propTypes = {
		name: PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container className="main-area">
		    	<div className="row">
		    		<div className="col">
		    			<h1 className='text-center'>Create New User</h1>
		    		</div>
		    	</div>
		    	<UserForm user={{}} />
		    </Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {

	};
}

export default connect(
	mapStateToProps,
	{}
)(NewUser)

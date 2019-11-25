import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from 'reactstrap';

import UserForm from './EditUserComps/UserForm';

export default class EditUser extends Component {
	static propTypes = {
		name: PropTypes.string,
	};

	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {
		const { user } = this.props;
		return (
			<Container className="main-area">
		    	<div className="row">
		    		<div className="col">
		    			<h1>Edit User Info
		    			</h1>
		    		</div>
		    	</div>
		    	<UserForm user={{}} />
		    </Container>
		);
	}
}

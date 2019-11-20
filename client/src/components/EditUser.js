import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from 'reactstrap';

export default class EditUser extends Component {
	static propTypes = {
		name: PropTypes.string,
	};

	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {
		return (
			<Container className="main-area">
		    	<h1>EditUser Component!</h1>
		    </Container>
		);
	}
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from 'reactstrap';

export default class Footer extends Component {
	static propTypes = {
		name: PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer>
				<Container>
					<h5 className="text-center">&#x24B8; 2019 Brian Tatum</h5>	
				</Container>
			</footer>
		);
	}
}

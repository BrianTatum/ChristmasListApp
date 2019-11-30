import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
		 NavItem, Container} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AppNavBar extends Component {
	static propTypes = {
		name: PropTypes.string,
	};

	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
		}
	}

	render() {
		const { isOpen } = this.state;
		return (
			<div>
				<Navbar color='dark' dark expand='sm'>
					<Container>
						<NavbarBrand href='/'>Christmas List</NavbarBrand>
						<NavbarToggler onClick={this._toggle}/>
						<Collapse isOpen={isOpen} navbar>
							<Nav className='ml-auto' navbar>
								<NavItem>
									<Link to='/newuser' className="nav-link">
										New User
									</Link>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}

	_toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen, 
		});
	}
}

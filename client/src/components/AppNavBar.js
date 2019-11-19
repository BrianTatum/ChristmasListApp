import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
		 NavLink, Container} from 'reactstrap';

export default class AppNavBar extends Component {
	static propTypes = {
		name: PropTypes.string,
	};

	constructor(props) {
		super(props);

		this.state = {
			isOpen: true,
		}
	}

	render() {
		const { isOpen } = this.state;
		return (
			<div>
				<Navbar color='dark' dark expand='sm' className='mb-5'>
					<Container>
						<NavbarBrand href='/'>Christmas List</NavbarBrand>
						<NavbarToggler onClick={this._toggle}/>
						<Collapse isOpen={isOpen} navbar>
							<Nav className='ml-auto' navbar>
								<NavItem>
									<NavLink href='/'>
										Temp
									</NavLink>
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

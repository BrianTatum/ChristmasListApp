import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { logOutUser } from '../actions/authActions';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
		 NavItem, Container} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

class AppNavBar extends Component {
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
		const { authToken, logOutUser } = this.props;
		const { isOpen } = this.state;

		const newUserNav = (
			<NavItem>
				<Link to='/newuser' className="nav-link">
					New User
				</Link>
			</NavItem>
		);

		const logOutNav = (
			<button className="btn btn-danger"
					onClick={logOutUser}>
				Logout
			</button>
		)

		return (
			<div>
				<Navbar color='dark' dark expand='sm'>
					<Container>
						<NavbarBrand href='/'>Christmas List</NavbarBrand>
						<NavbarToggler onClick={this._toggle}/>
						<Collapse isOpen={isOpen} navbar>
							<Nav className='ml-auto' navbar>
								{ authToken ? logOutNav : newUserNav}
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

const mapStateToProps = ({ auth }) => ({
	authToken: auth.authToken,
})

export default connect(
	mapStateToProps,
	{logOutUser}
)(AppNavBar)

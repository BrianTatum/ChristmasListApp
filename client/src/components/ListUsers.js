import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getUsers } from '../actions/userActions.js';

import { Container } from 'reactstrap';

import UserRow from './ListUsersComps/UserRow';

class ListUsers extends Component {
	static propTypes = {
		users: PropTypes.array,
		getUsers: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);

		this.state = {	};
	}

	componentDidMount() {
		this.props.getUsers();
	}

	render() {
		const userList = this._makeUserList();

		return (
			<Container className='main-area'>
				<div className="row">
					<div className="col">
						<h1>User List</h1>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<ul className="list-unstyle">
							{userList}
						</ul>
					</div>
				</div>
			</Container>
		);
	}

	_makeUserList() {
		const { users } = this.props;
		return users.map(user => {
			return <UserRow key={user._id} user={user} />
		})
	}
}

const mapStateToProps = ({ users }) => ({
	users: users.users,
})

export default connect(
	mapStateToProps,
	{getUsers}
)(ListUsers)
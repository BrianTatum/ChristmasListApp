import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../actions/userActions.js';

import { Container } from 'reactstrap';

import UserRow from './ListUsersComps/UserRow';

class ListUsers extends Component {
	static propTypes = {
		users: PropTypes.array,
		getUsers: PropTypes.func.isRequired,
		deleteUser: PropTypes.func.isRequired,
	};

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
						<ul className="list-group">
							{userList}
						</ul>
					</div>
				</div>
			</Container>
		);
	}

	_makeUserList() {
		const { users, deleteUser } = this.props;
		return users.map(user => {
			return <UserRow key={user._id} user={user} deleteUser={deleteUser} />
		})
	}
}

const mapStateToProps = ({ users }) => ({
	users: users.users,
})

export default connect(
	mapStateToProps,
	{getUsers, deleteUser}
)(ListUsers)
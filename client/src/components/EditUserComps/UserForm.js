import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormField } from '../common';

export default class UserForm extends Component {
	static propTypes = {
		user: PropTypes.object,
	};

	constructor(props) {
		super(props);

		this.state = {
			user: this.props.user,
			errors: {},
		}
	}

	render() {
		const { user, errors } = this.state;

		return (
			<form onSubmit={(e) => this._handleFormSubmit(e)}>
				<div className="row">
					<div className="col">
						<FormField	formLabel="Username"
									propKey="username"
									propValue={user.username || ''}
									onChange={this._updateField}
									placeholder='Enter Username'
									errors={errors.username} />
					</div>
					<div className="col">

					</div>
				</div>
				<div className="row">
					<div className="col">
						<FormField	formLabel="Password"
									propKey="password"
									propValue={user.password || ''}
									onChange={this._updateField}
									placeholder='Enter Password'
									errors={errors.password}
									password />
					</div>
					<div className="col">
						<FormField	formLabel="Confirm Password"
									propKey="confirmPassword"
									propValue={user.confirmPassword || ''}
									onChange={this._updateField}
									placeholder='Confirm Password'
									errors={errors.confirmPassword}
									password />
					</div>
				</div>
				<div className="row">
					<div className="col">
						<FormField	formLabel="First Name"
									propKey="firstName"
									propValue={user.firstName || ''}
									onChange={this._updateField}
									placeholder='Enter First Name'
									errors={errors.firstName} />
					</div>
					<div className="col">
						<FormField	formLabel="Last Name"
									propKey="lastName"
									propValue={user.lastName || ''}
									onChange={this._updateField}
									placeholder='Enter Last Name'
									errors={errors.lastName} />
					</div>
				</div>
				<div className="row justify-content-around">
					<div className="col-3">
						<button className="btn btn-success btn-block"
							type='submit'>
							Save
						</button>
					</div>
					<div className="col-3">
						<button className="btn btn-warning btn-block"
								type='button'
								onClick={this._handleReset}>
							Reset
						</button>
					</div>
				</div>
			</form>
		);
	}

	_updateField = (propKey, propValue) => {
		this.setState({
			user: {...this.state.user, [propKey]: propValue} 
		});
	}

	_handleReset = () => {
		this.setState({
			user: this.props.user, 
		});
	}

	_handleFormSubmit = (e) => {
		e.preventDefault();
		alert('Submit Data!!')
	}
}

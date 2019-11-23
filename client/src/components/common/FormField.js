import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';

class FormField extends Component {
	constructor(props) {
		super(props);

		this.toggleToolTip = this.toggleToolTip.bind(this);

		this.state = {
			toolTipOpen: false,
			errorList: this.props.errors || [],
			hashId:  Math.floor((1 + Math.random()) * 0x10000)
    					.toString(16)
    					.substring(1),
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			errorList:  newProps.errors || []
		});
	}

	render() {
		const { formLabel, propKey, propValue, onChange, placeholder, hideLabel} = this.props;
		const { hashId } = this.state;
		const errorList = this.listErrors();
		const inputType = this.props.password ? 'password' : 'text';
		return (
			<div className={this.state.errorList.length > 0 ? 'field_with_errors' : ''}>
				<div className="form-group" id={`${propKey}_errors_${hashId}`} onMouseOver={this.toggleToolTip}>
					{ !hideLabel ? (<label className='font-weight-bold' htmlFor={propKey}>{formLabel}:</label>) : '' }
					<input  id={`${propKey}_${Math.floor(Math.random() * 1000) + 1}`}
					        className='form-control'
					        type={inputType}
					        value={ propValue }
					      	placeholder={placeholder}
					        onChange={(e) => onChange(propKey, e.target.value)}
					    />
					
				</div>
				<Tooltip 	placement='top-start'
							isOpen={this.state.toolTipOpen}
							target={`${propKey}_errors_${hashId}`}
							toggle={this.toggleToolTip}
							style={{backgroundColor: 'white', color: 'red', borderColor: 'red', borderStyle: 'solid', borderWidth: 3}}>
					{errorList}
				</Tooltip>
			</div>
		);
	}

	toggleToolTip() {
		if (this.state.errorList.length > 0) {
			this.setState({
				toolTipOpen: !this.state.toolTipOpen 
			});
		}
	}

	listErrors() {
		return this.state.errorList.map((error, i) => {
			return <h5 className='text-left' key={i}>{`${this.props.formLabel} ${error}`}</h5>
		})
	}
}

FormField.propTypes = {
	formLabel: PropTypes.string.isRequired,
	propKey: PropTypes.string.isRequired,
	propValue: PropTypes.oneOfType([
				  PropTypes.string,
				  PropTypes.number
				]).isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	errors: PropTypes.array,
	hideLabel: PropTypes.bool,
};

export { FormField };
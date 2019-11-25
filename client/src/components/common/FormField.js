import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';

class FormField extends Component {
	static defaultProps = {
        errors: {}
    }

	constructor(props) {
		super(props);

		this.toggleToolTip = this.toggleToolTip.bind(this);

		this.state = {
			toolTipOpen: false,
			errorList: this.props.errors || {},
			hashId:  Math.floor((1 + Math.random()) * 0x10000)
    					.toString(16)
    					.substring(1),
		}
	}

	render() {
		const { formLabel, propKey, propValue, onChange, placeholder, hideLabel, errors} = this.props;
		const { hashId } = this.state;
		const inputType = this.props.password ? 'password' : 'text';
		return (
			<div className={errors.message ? 'field_with_errors' : ''}>
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
					<h5>{`${this.props.formLabel} ${errors.message}`}</h5>
				</Tooltip>
			</div>
		);
	}

	toggleToolTip() {
		if (this.props.errors.message) {
			this.setState({
				toolTipOpen: !this.state.toolTipOpen 
			});
		}
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
	errors: PropTypes.object,
	hideLabel: PropTypes.bool,
};

export { FormField };
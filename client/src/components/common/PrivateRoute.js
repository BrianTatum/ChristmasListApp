import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authToken, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
	    authToken ? <Component {...props} /> : <Redirect to='/' />
	  )} />
  )
}

const mapStateToProps = ({ auth }) => ({
	authToken: auth.authToken,
})

export default connect(
	mapStateToProps,
	{}
)(PrivateRoute);
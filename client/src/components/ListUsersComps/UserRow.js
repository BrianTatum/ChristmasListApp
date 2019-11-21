import React from 'react';
import PropTypes from 'prop-types';

const UserRow = ({ user }) => {
  return (
    <li className="list-item">
    	{`${user.firstName} ${user.lastName}`}
    </li>
  )
}

UserRow.propTypes = {
	user: PropTypes.object.isRequired, 
}

export default UserRow;